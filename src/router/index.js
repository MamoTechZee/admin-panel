import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Admin",
    component: ()=>import('../views/Admin.vue'),
  },
  {
    path: "/login",
    name: "Login",
    component: ()=>import('../views/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;