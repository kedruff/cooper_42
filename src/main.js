import Vue from "vue";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld";
import QuestionDetails from "./components/QuestionDetail";
import VueRouter from "vue-router";

const routes = [
  { path: `/`, component: HelloWorld },
  {
    path: `/question/:id`,
    name: `questionDetail`,
    component: QuestionDetails
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

Vue.config.productionTip = false;

Vue.use(VueRouter);
new Vue({
  el: `#app`,
  router,
  components: { App },
  render: h => h(App)
}).$mount("#app");
