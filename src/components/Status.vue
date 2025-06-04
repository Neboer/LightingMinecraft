<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  host: {
    type: String,
    required: true
  }
})

const serverData = ref(null)
const loading = ref(false)
const error = ref(null)

async function checkStatus() {
  const url = `https://api.mcstatus.io/v2/status/java/${encodeURIComponent(props.host)}` 
  loading.value = true
  error.value = null
  serverData.value = null

  try {
    const response = await fetch(url)

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(errorText)
    }

    const data = await response.json()
    serverData.value = data
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  checkStatus()
})
</script>

<template>
  <div class="server-status">
    <h2>Minecraft 服务器状态</h2>

    <div v-if="loading" class="loading">加载中...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="serverData" class="status-info">
      <p><strong>在线:</strong> {{ serverData.online ? '✅是' : '❌否' }}</p>
      <p><strong>主机地址:</strong> {{ serverData.host }}:{{ serverData.port }}</p>
      <p><strong>在线玩家:</strong> {{ serverData.players?.online || 0 }} / {{ serverData.players?.max || 0 }}</p>
      <p><strong>版本:</strong> {{ serverData.version?.name_clean || '未知' }}</p>
      <p><strong>MOTD:</strong> <span v-html="serverData.motd?.html || '无 MOTD'"></span></p>

      <div v-if="serverData.icon" class="icon">
        <img :src="serverData.icon" alt="服务器图标" width="64" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.server-status {
  font-family: Arial, sans-serif;
  padding: 20px;
  border: 1px solid #ccc;
  max-width: 500px;
  margin: 20px auto;
}

.loading {
  color: orange;
}

.error {
  color: red;
}

.status-info p {
  margin: 8px 0;
}
</style>