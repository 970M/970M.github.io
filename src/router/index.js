import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WorksView from "../views/WorksView.vue";
import SkillsView from "../views/SkillsView.vue";
import ContactView from "../views/ContactView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/works", component: WorksView },
    { path: "/skills", component: SkillsView },
    { path: "/contact", component: ContactView },
    { path: "/:pathMatch(.*)*", component: NotFoundView },
  ],
});

export default router;
