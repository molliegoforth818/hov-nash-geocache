import Vue from "vue";
import VueRouter from "vue-router";
import NashMap from "../views/NashMap.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "NashMap",
    component: NashMap,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
