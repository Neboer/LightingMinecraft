<script setup>
const props = defineProps(["title", "image", "description"]);
// 高性能的服务器、热心且高技术力的运营团队、活跃的玩家社区、丰富多彩的活动、最纯粹的多人生存体验
</script>
<template>
  <div>
    <div class="container">
      <div class="image-box">
        <img class="image" :src="props.image" alt="image" />
      </div>
      <div class="text">
        <div class="title">{{ props.title }}</div>
        <div class="description">{{ props.description }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  width: 600px;
  margin: 2rem auto;
}
.image {
  width: 200px;
}
.title {
  font: bold x-large sans-serif;
}
.text {
  overflow-wrap: anywhere;
}
</style>

<style scoped>
@media (max-width: 576px) {
  .image-box {
    display: none;
  }

  .text {
    width: 90vw;
  }
}
</style>
