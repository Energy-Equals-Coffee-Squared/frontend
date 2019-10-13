import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store.js";

// import Buefy
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("vue-fontawesome", FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas"
});
// Use Router

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueCarousel from "@chenfengyuan/vue-carousel";

// library.add(faCoffee)
// library.add(faShoppingCart)

Vue.use(VueCarousel);
// Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
