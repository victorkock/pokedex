import HomeView from "../views/HomeView.vue";
import FavoritesView from "../views/FavoritesView.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/favorites",
    name: "FavoritesView",
    component: FavoritesView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
