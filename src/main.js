import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Buefy
import Buefy from "buefy";
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
// Use Router

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)
library.add(faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon)




Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
