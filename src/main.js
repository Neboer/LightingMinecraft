import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";

import App from "./App.vue";
// import "viewerjs/dist/viewer.css";
// import VueViewer from "v-viewer";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faServer,
  faGamepad,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faDownload,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faQq } from "@fortawesome/free-brands-svg-icons";

library.add(
  faServer,
  faQq,
  faGamepad,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faDownload,
  faBars
);

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(VueViewer);

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
