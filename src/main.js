import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import Multiselect from "vue-multiselect";

// register globally
Vue.component("multiselect", Multiselect);

new Vue({
  render: h => h(App)
}).$mount("#app");
