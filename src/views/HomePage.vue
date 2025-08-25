<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import useClipboard from 'vue-clipboard3'
import SellerCard from "@/components/SellerCard.vue";
import Museum4K from "@/assets/images/background/Museum_4K_low.mp4";
import Museum1080P from "@/assets/images/background/Museum_1080P_low.mp4";
import MuseumMobile from "@/assets/images/background/Museum_1080P_low_col.mp4";
import MuseumWebp from "@/assets/images/background/Museum.webp";
const currentVideo = ref('');

const { toClipboard } = useClipboard()
const copied = ref(false);

onMounted(() => {
  setVideoBasedOnDevice();

  const handleResize = () => {
    setVideoBasedOnDevice();
  };

  window.addEventListener('resize', handleResize);
  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
  });
});

function setVideoBasedOnDevice() {
  const width = window.innerWidth;

  if (width >= 3840) {
    currentVideo.value = Museum4K;
  } else if (width >= 500) {
    currentVideo.value = Museum1080P;
  } else {
    currentVideo.value = MuseumMobile;
  }
}

async function copyToClipboard(content) {
  try {
    await toClipboard(content)
    copied.value = true
    setTimeout(() => copied.value = false, 1500)
  } catch (e) {
    console.error("复制失败:", e)
  }
}
</script>

<template>
  <div>
    <div id="background-video-container">
      <img
        :src="MuseumWebp"
        alt="Background Placeholder"
        class="video-poster"
        aria-hidden="true"
      />
      <video loop disableremoteplayback disablepictureinpicture autoplay playsinline muted id="background-video">
        <source :src="currentVideo" type="video/mp4" />
      </video>
      <div class="overlay" />
    </div>

    <div class="main-homepage">
      <div class="banner">
        <div class="banner-text">灵动Minecraft</div>
        <div class="description-text">
          一个<strong style="color: red">有爱</strong>的公益MC服务器社区
        </div>
      </div>
      <div class="seller">
        <seller-card
          title="Java版地址"
          :icon="['fas', 'fa-server']"
          content="ldmc.neboer.site"
          color="black"
          @click="copyToClipboard('ldmc.neboer.site')"
          class="hover-tip"
          :data-tooltip="copied ? '复制成功' : '点击复制'"
        ></seller-card>
        <seller-card
          title="游戏版本"
          :icon="['fas', 'fa-gamepad']"
          content="Java 1.21.8 原版"
          color="green"
        ></seller-card>
        <seller-card
          title="QQ交流群"
          :icon="['fab', 'fa-qq']"
          content="239434096"
          color="deepskyblue"
          @click="copyToClipboard('239434096')"
          class="hover-tip"
          :data-tooltip="copied ? '复制成功' : '点击复制'"
        ></seller-card>
      </div>
      <div class="notice">
        <h3 style="margin: 0px; display: flex; align-items: center; justify-content: center;">
          <font-awesome-icon :icon="['fas', 'exclamation-circle']" style="margin-right: 8px;" />
          服务器说明
        </h3>
        <ul style="padding: 0px; list-style: none;">
          <li>✅ 无需正版登录</li>
          <li>✅ 内置验证系统</li>
          <li>✅ 可自由参观 建造权限由管理员授予</li>
          <li>✅ 支持基岩版与 Java 版互通</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  height: 100vh;
  width: 100%;
  background: #0000008f;
  z-index: 3;
}

#background-video-container {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -10;
  object-fit: cover;
  align-items: center;
  justify-content: center;
}
.video-poster {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transition: opacity 0.5s ease;
}
#background-video {
  position: relative;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.main-homepage {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.banner {
  width: fit-content;
  margin: auto;
}

.banner-text {
  color: floralwhite;
  font-size: 5em;
  font-weight: bold;
  text-shadow: 2px 2px black;
}

.description-text {
  color: white;
  font-size: x-large;
  text-align: center;
  margin-top: 60px;
}

.seller {
  margin: auto;
  width: fit-content;
  display: flex;
  height: 60px;
  transform: scale(1.1);
}

.notice {
  background-color: rgba(255, 255, 255, 0.9);
  color: #e74c3c;
  padding: 5px 10px;
  border-radius: 15px;
  margin-left: auto;
  width: fit-content;
  max-width: 80%;
  text-align: left;
  font-size: 0.9em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>

<style scoped>
.hover-tip {
  cursor: pointer;
  position: relative;
}

.hover-tip::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}

.hover-tip:hover::after {
  opacity: 1;
  visibility: visible;
}
@media (max-width: 1368px) {
  .banner-text {
    font-size: 3em;
  }

  .seller {
    transform: none;
    margin: auto;
    width: fit-content;
    display: flex;
  }
}

@media (max-width: 996px) {
  .seller {
    flex-direction: column;
  }

  .notice {
    font-size: 0.8em;
    padding: 5px 10px;
    display: none;
  }
}
</style>
