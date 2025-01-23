<script setup>
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import { docHomepage } from "@/config.json";

const route = useRoute();
const folding = ref(false);
const css_transition = computed(() =>
  folding.value ? "rotate(0)" : "rotate(0.25turn)"
);
const css_menu_width = computed(() =>
  folding.value ? "0" : "calc(100vw - 42px)"
);
const fold = () => {
  folding.value = !folding.value;
};
</script>
<template>
  <div class="bar">
    <div class="mobile-burger" @click="fold">
      <font-awesome-icon :icon="['fas', 'fa-bars']" />
    </div>
    <div class="menu-container">
      <nav id="menu">
        <li style="margin-top: 0">
          <router-link
            :to="{ name: 'home' }"
            class="link"
            :class="{ 'link-current': route.name === 'home' }"
            >主页</router-link
          >
        </li>
        <li style="margin-top: 0">
          <router-link
            :to="{ name: 'info' }"
            class="link"
            :class="{ 'link-current': route.name === 'info' }"
            >选择灵动</router-link
          >
        </li>
        <li style="margin-top: 0">
          <router-link
            :to="{ name: 'gallery' }"
            class="link"
            :class="{ 'link-current': route.name === 'gallery' }"
            >摄影画廊</router-link
          >
        </li>
        <li style="margin-top: 0">
          <router-link
            :to="{ name: 'about' }"
            class="link"
            :class="{ 'link-current': route.name === 'about' }"
            >关于我们</router-link
          >
        </li>
        <li style="margin-top: 0">
          <a class="link" :href="docHomepage">帮助文档</a>
        </li>
      </nav>
    </div>
  </div>
</template>
<style scoped>
.mobile-burger {
  display: none;
}

/*! CSS Used from: Embedded */
.link-current {
  border-bottom-color: wheat !important;
}

.link {
  vertical-align: middle;
  display: inline-block;
  background-repeat: no-repeat;
  text-decoration: unset;
}

* {
  box-sizing: border-box;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

#menu {
  display: flex;
  flex-direction: row;
  /*background-color: rgba(79, 97, 156, v-bind(bk_color_opacity));*/
}

#menu li {
  position: relative;
  width: fit-content;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-left: 20px;
}

#menu li .link {
  color: white;
  cursor: pointer;
  font-size: 1.15em;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  transition: 0.15s;
  background: none;
}

#menu li a:hover {
  border-bottom-color: lightgoldenrodyellow;
  color: lightgoldenrodyellow;
}

#menu li a:hover i {
  background-color: lightgoldenrodyellow;
}

.link {
  vertical-align: middle;
  display: inline-block;
  background-repeat: no-repeat;
}

.bar {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>

<style scoped>
@media (max-width: 576px) {
  .bar {
    display: flex;
  }

  .mobile-burger {
    display: block;
    line-height: 2;
    text-align: center;
    background-color: white;
    border-radius: 3px;
    height: 32px;
    width: 32px;
    transform: v-bind(css_transition);
    transition: transform 0.5s ease-in-out;
    flex-shrink: 0;
  }

  .menu-container {
    max-width: v-bind(css_menu_width);
    overflow-y: hidden;
    transition: max-width 0.5s ease-in-out;
  }

  #menu {
    flex-direction: row;
    z-index: 10;
    width: calc(5 * 85px);
  }

  #menu li {
    margin-left: 15px;
  }

  /* 滚动条样式 */
  ::-webkit-scrollbar {
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
}
</style>
