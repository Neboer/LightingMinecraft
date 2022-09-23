<script setup>
import { defineProps } from "vue";
const props = defineProps(["full", "thumbnail", "title", "description"]);
</script>
<template>
  <div
    class="frame-container"
    :data-src="props.full"
    :data-sub-html="`<h4>${props.title}</h4><p>${props.description}</p>`"
  >
    <img :src="props.thumbnail" :alt="props.title" class="image" />
    <div class="description">
      {{ props.description }}
    </div>
  </div>
</template>
<style scoped>
.description {
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
}
.frame-container {
  position: relative;
  max-width: calc(100% - 40px);
  width: 700px;
  margin: 10px auto;
  border-style: solid;
  border-width: 20px;
  border-image: url("@/assets/images/mcmap.png") 44 fill;
  align-items: flex-start;
}
.image {
  max-width: 100%;
  /*height: 100%;*/
  display: block;
  margin: auto;
}
</style>
