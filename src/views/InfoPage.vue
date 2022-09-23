<script setup>
import InfoItem from "@/components/InfoItem.vue";

import ServerImage from "@/assets/images/ChooseLighting/huaweicloud.svg";
import TeamImage from "@/assets/images/ChooseLighting/team.webp";
import ProtectImage from "@/assets/images/ChooseLighting/houseundershield.webp";
import CommunityImage from "@/assets/images/ChooseLighting/community.webp";
import ActivityImage from "@/assets/images/ChooseLighting/activities.webp";
import SwordImage from "@/assets/images/ChooseLighting/diamond_sword.webp";
</script>
<template>
  <div class="half-screen">
    <div class="banner">我们的优势</div>
  </div>
  <div class="item-container">
    <info-item
      title="高性能的服务器"
      description="我们有来自赞助团队捐助的华为云高性能服务器"
      :image="ServerImage"
    ></info-item>
    <info-item
      title="热心、高技术力且有经验的团队"
      description="我们的技术团队精通软件、网站、运维及Minecraft相关的开发，并且十分热心帮助玩家解决各种问题。我们的维护团队拥有六年的运维公益MC服务器的经验，保证给您提供专业的支持"
      :image="TeamImage"
    ></info-item>
    <info-item
      title="保护您在Minecraft世界中的一切"
      description="开放的MC服务器难免会遇到捣蛋鬼，因此灵动MC使用了很多插件来保护来自各个玩家的宝贵劳动成果，这些插件有很多都是自主开发的。
      此外，灵动MC确保游戏用户都同意我们的用户协议，而在用户协议中我们明确声明灵动MC保护您在MC中的一切建造和设计，您对您的建筑和设计有完全的所有权和处置权"
      :image="ProtectImage"
    ></info-item>
    <info-item
      title="活跃的玩家社区"
      description="我们有来自中国各地甚至世界范围内的玩家，群里的活跃玩家有近20人，在任何时候都可以找到志同道合的小伙伴一起玩耍"
      :image="CommunityImage"
    ></info-item>
    <info-item
      title="丰富多彩的活动"
      description="我们的团队鼓励玩家自己策划各种活动，维护团队也会参与到一些活动的策划之中。服务器会不时举行各种庆典和派对，精彩活动不停歇！"
      :image="ActivityImage"
    ></info-item>
    <info-item
      title="纯粹的多人原版生存体验"
      description="如果你觉得不加插件的MC很“没意思”，那我们指出原版生存服的玩法和乐趣并没有被彻底发掘。不管你是建筑党，还是生电大佬，还是MC生存专家，抑或是只想找一个陌生的地方探险、建立新的城市，服务器里总有一个适合你的角色，在等着你的到来！"
      :image="SwordImage"
    ></info-item>
  </div>
</template>
<style scoped>
.half-screen {
  height: 400px;
  background-image: url("@/assets/images/background/eveningbackground2.webp");
  background-position: 20%;
  background-size: cover;
  border: transparent solid 1px; /*A nice trick! */
}

.item-container {
  justify-content: center;
  padding: 10px;
  display: flex;
  max-width: 100%;
  flex-flow: wrap;
}

.banner {
  font: bold 3em SansSerif;
  width: fit-content;
  margin: 180px auto;
  color: white;
}
</style>

<style scoped>
@media (max-width: 576px) {
  .item-container {
    flex-direction: column;
    overflow: hidden;
  }
}
</style>
