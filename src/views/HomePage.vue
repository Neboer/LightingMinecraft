<script setup>
import SellerCard from "@/components/SellerCard.vue";
import MuseumFarVideo from "@/assets/images/background/museum-far-rotate.mp4";
</script>

<template>
  <div>
    <div id="background-video-container">
      <video autoplay muted loop id="background-video">
        <source :src="MuseumFarVideo" type="video/mp4" />
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
        ></seller-card>
        <seller-card
          title="游戏版本"
          :icon="['fas', 'fa-gamepad']"
          content="Java 1.20.6 原版"
          color="green"
        ></seller-card>
        <seller-card
          title="QQ交流群"
          :icon="['fab', 'fa-qq']"
          content="239434096"
          color="deepskyblue"
        ></seller-card>
      </div>
      <div class="notice">
        服务器不强制要求正版登录，内置验证系统，加入服务器后可自由参观，由我们授予您建造权限。
        本服支持基岩版（PE）玩家和Java版数据互通，请加入QQ交流群获得更多信息。
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  height: 100vh;
  width: 100%;
  background: #0000008f
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

#background-video {
  position: relative;
  object-fit: cover;
  width: 100%;
  height: 100%;
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
  padding: 12px 20px;
  border-radius: 15px;
  margin: 20px auto;
  width: fit-content;
  max-width: 80%;
  text-align: center;
  font-size: 0.9em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>

<style scoped>
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

@media (max-width: 960px) {
  .seller {
    flex-direction: column;
  }

  .notice {
    font-size: 0.8em;
    margin: 15px auto;
    padding: 10px 15px;
  }
}
</style>
