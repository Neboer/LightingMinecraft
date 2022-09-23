<script setup>
import full_gallery from "@/assets/gallery/gallery.json";
import GalleryFrame from "@/components/GalleryFrame.vue";
import { imageBedPrefix } from "@/config.json";
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
</script>
<template>
  <div class="stretch-screen">
    <h2 class="title">灵动MC风景画廊</h2>
    <Lightgallery
      :settings="{ speed: 500, plugins: [lgThumbnail, lgZoom] }"
      class="viewer"
    >
      <gallery-frame
        v-for="(image_info, index) in full_gallery"
        :key="index"
        :description="image_info.description"
        :title="image_info.title"
        :full="imageBedPrefix + image_info.full"
        :thumbnail="imageBedPrefix + image_info.thumbnail"
      ></gallery-frame>
    </Lightgallery>
  </div>
</template>
<style>
@import "lightgallery/css/lightgallery.css";
@import "lightgallery/css/lg-thumbnail.css";
@import "lightgallery/css/lg-zoom.css";
</style>

<style scoped>
.title {
  width: fit-content;
  margin: 10px auto;
  font: bold 3em SansSerif;
  color: white;
}

.stretch-screen {
  background-image: url("@/assets/images/background/wood_planks.jpg");
  background-position: center;
  background-repeat: repeat;
  padding-top: 35px;
}

.viewer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>

<style scoped>
@media (max-width: 1560px) {
  .viewer {
    flex-direction: column;
    flex-wrap: unset;
  }
}

@media (max-width: 1300px) {
  .event-item {
    width: 95%;
  }

  .title {
    font: bold 2.5em SansSerif;
  }
}
</style>
