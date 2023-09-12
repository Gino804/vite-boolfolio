import { createRouter, createWebHistory } from "vue-router";

import ProjectDetailPage from "../pages/ProjectDetailPage.vue";
import ProjectsList from "../pages/ProjectsList.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: "/", name: "projects-list", component: ProjectsList },
    {
      path: "/projects/:id",
      name: "project-detail",
      component: ProjectDetailPage,
    },
  ],
});

export { router };
