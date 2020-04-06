import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import registryComponent from "./components";
import registryViews from "./views";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import DateUtil from "@/assets/js/DateUtil";
// import "@/assets/css/common.scss";

Vue.config.productionTip = false;

registryComponent();
registryViews();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
