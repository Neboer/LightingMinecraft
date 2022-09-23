import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import InfoPage from "../views/InfoPage.vue";
import PhotoGallery from "../views/PhotoGallery.vue";
import AboutUs from "../views/AboutUs.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/info",
      name: "info",
      component: InfoPage,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: PhotoGallery,
    },
    {
      path: "/about",
      name: "about",
      component: AboutUs,
    },
  ],
});

export default router;
