import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

Vue.config.productionTip = false;

//axios config
const axiosConfig = {
  //api base url
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
  baseURL: "/data"
};
const axiosBase = axios.create(axiosConfig);
Vue.prototype.$http = axiosBase;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
