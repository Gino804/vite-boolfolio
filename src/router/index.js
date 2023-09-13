import { createRouter, createWebHistory } from "vue-router";

import ProjectDetailPage from "../pages/ProjectDetailPage.vue";
import ProjectsList from "../pages/ProjectsList.vue";
import ContactPage from "../pages/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: "/", name: "projects-list", component: ProjectsList },
    { path: "/contact", name: "contact", component: ContactPage },
    {
      path: "/projects/:id",
      name: "project-detail",
      component: ProjectDetailPage,
    },
  ],
});

export { router };
