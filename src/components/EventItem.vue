<script setup>
const props = defineProps(["image", "title", "description"]);
</script>
<template>
  <div class="container">
    <div class="image-container">
      <img class="image" :src="props.image" :alt="title" />
    </div>
    <div class="text-container">
      <h1 class="title">{{ props.title }}</h1>
      <div class="description">{{ props.description }}</div>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  margin: 1em;
  padding: 1em;
}
.text-container {
  margin-left: 1em;
}
.title {
  margin-block: 0.3em;
}
.image {
  max-width: 100%;
}
</style>

<style scoped>
@media (max-width: 576px) {
  .container {
    margin: 0.5em;
    padding: 0.5em;
  }

  .title {
    font-size: 1em;
  }

  .image {
    max-width: 84px;
  }
}
</style>
