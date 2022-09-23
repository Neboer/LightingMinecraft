<script setup>
const props = defineProps(["name", "description", "image"]);
</script>
<template>
  <div class="container">
    <div class="image-box">
      <img :src="props.image" alt="avatar" class="avatar" />
    </div>
    <div class="text">
      <h3 class="text-head">{{ props.name }}</h3>
      <div>{{ props.description }}</div>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  border-radius: 5px;
  width: fit-content;
  padding: 10px;
  background-color: rgba(255, 255, 255, 70%);
  margin: 2em;
  overflow: hidden;
}
.image-box {
  width: 80px;
}
.avatar {
  border-radius: 50%;
  width: 100%;
}
.text {
  margin-left: 10px;
  width: 300px;
  max-width: calc(100% - 100px);
}
.text-head {
  margin: 13px 0;
}

@media (max-width: 700px) {
  .container {
    margin: 5px;
  }
}
</style>
