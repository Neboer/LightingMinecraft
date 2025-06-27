import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
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
  faUser,
  faLock,
  faLongArrowRight,
  faExclamationCircle,
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
  faBars,
  faUser,
  faLock,
  faLongArrowRight,
  faExclamationCircle
);

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(VueViewer);

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
