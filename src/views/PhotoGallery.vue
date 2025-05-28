<script setup>
import full_gallery from "@/assets/images/gallery/gallery.json";
import full_gallery_files from "@/assets/images/gallery/gallery_files.json";

import GalleryFrame from "@/components/GalleryFrame.vue";
import { imageBedPrefix, useImageBed } from "@/config.json";
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// 新增：本地图片引入与处理
import { computed } from "vue";

let galleryData = computed(() => []);
if (!useImageBed) {
  // 动态引入 ori 和 thumbnail 文件夹下的所有图片
  const oriImages = import.meta.glob("@/assets/images/gallery/ori/*", {
    eager: true,
    import: "default",
  });
  const thumbImages = import.meta.glob("@/assets/images/gallery/thumbnail/*", {
    eager: true,
    import: "default",
  });

  // 以 ori 文件夹中的图片文件名为准
  galleryData = computed(() => {
    return Object.keys(oriImages).map((oriPath) => {
      const fileName = oriPath.split("/").pop();
      const thumbPath = Object.keys(thumbImages).find((t) =>
        t.endsWith("/" + fileName)
      );
      const meta = full_gallery_files[fileName] || {};
      return {
        full: oriImages[oriPath],
        thumbnail: thumbPath ? thumbImages[thumbPath] : oriImages[oriPath],
        title: meta.title || fileName,
        description: meta.description || "",
      };
    });
  });
}
</script>

<template>
  <div class="stretch-screen">
    <h2 class="title">灵动MC风景画廊</h2>
    <Lightgallery
      :settings="{ speed: 500, plugins: [lgThumbnail, lgZoom] }"
      class="viewer"
    >
      <template v-if="useImageBed">
        <gallery-frame
          v-for="(image_info, index) in full_gallery"
          :key="index"
          :description="image_info.description"
          :title="image_info.title"
          :full="imageBedPrefix + image_info.full"
          :thumbnail="imageBedPrefix + image_info.thumbnail"
        ></gallery-frame>
      </template>
      <template v-else>
        <gallery-frame
          v-for="(image_info, index) in galleryData"
          :key="index"
          :description="image_info.description"
          :title="image_info.title"
          :full="image_info.full"
          :thumbnail="image_info.thumbnail"
        ></gallery-frame>
      </template>
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
