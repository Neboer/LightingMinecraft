<script setup>
import NeboerAvatar from "@/assets/images/arisa_avatar.jpg";
import StaffCard from "@/components/StaffCard.vue";

import lockoctAvatar from "@/assets/images/avatars/lockoct.jpg";
import groundhogAvatar from "@/assets/images/avatars/groundhog.jpg";
import wsbzAvatar from "@/assets/images/avatars/wsbz.jpg";
import kruslAvatar from "@/assets/images/avatars/krusl.jpg";
import ducksoftAvatar from "@/assets/images/avatars/ducksoft.jpg";

const staffs = [
  {
    image: NeboerAvatar,
    name: "Neboer",
    description:
      "Neboer是灵动MC的现任OP，负责服务器的技术维护、插件维护、处理玩家请求等技术相关的事宜。",
  },
  {
    image: lockoctAvatar,
    name: "lockoct",
    description:
      "lockoct是灵动吉祥物，作为运营团队的一员参与决议服务器的重大事项。",
  },
  {
    image: wsbzAvatar,
    name: "wsbz",
    description: "wsbz是灵动MC的创始人兼上任OP，同时也是服务器的插件开发者。",
  },
  {
    image: groundhogAvatar,
    name: "Groundhog",
    description:
      "Groundhog是灵动MC的管理员，负责和玩家互动，与玩家接触并解决玩家遇到的问题。",
  },
  {
    image: kruslAvatar,
    name: "Krusl",
    description:
      "Krusl是灵动MC系统工程师，负责解决与操作系统、游戏优化、网络IO等相关的技术问题。",
  },
  {
    image: ducksoftAvatar,
    name: "Ducksoft",
    description:
      "Ducksoft是灵动MC工程师兼赞助人，他为服务器提供了高防高性能的实例，使举办大型派对成为可能。",
  },
];
</script>
<template>
  <div class="background">
    <div class="banner">灵动MC运营团队</div>
    <div class="card-list">
      <staff-card
        v-for="staff in staffs"
        :key="staff.name"
        :description="staff.description"
        :image="staff.image"
        :name="staff.name"
      />
    </div>
  </div>
</template>
<style scoped>
.background {
  background-image: url("@/assets/images/background/minecraft-wallpaper-whatspaper-14.webp");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 40px);
  padding-top: 40px;
}
.card-list {
  display: flex;
  width: 80%;
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
}
.banner {
  font: bold 3em SansSerif;
  width: fit-content;
  margin: auto;
  color: white;
}

@media (max-width: 700px) {
  .card-list {
    flex-direction: row;
    width: 90%;
  }
  .banner {
    font-size: 2em;
  }
}
</style>
