<script setup>
import SellerCard from "@/components/SellerCard.vue";
</script>

<template>
  <div>
    <div class="background">
      <div class="banner">
        <div class="banner-text">灵动Minecraft</div>
        <div class="description-text">
          一个<strong style="color: lightcoral">有爱</strong>的公益MC服务器社区
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
        服务器不强制要求正版登录，内置验证系统，加入服务器后可自由参观，由我们授予您建造权限。本服支持基岩版（PE）玩家和Java版数据互通，请加入QQ交流群获得更多信息。
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url("@/assets/images/background/background.webp");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.banner {
  width: fit-content;
  margin: auto;
}

.banner-text {
  color: white;
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
