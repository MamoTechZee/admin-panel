import { createWebHistory, createRouter } from "vue-router";

function guardMyroute(to, from, next)
{
 var isAuthenticated= false;
//this is just an example. You will have to find a better or 
// centralised way to handle you localstorage data handling 
if(localStorage.getItem('LoggedUser'))
  isAuthenticated = true;
 else
  isAuthenticated= false;
 if(isAuthenticated) 
 {
  next(); // allow to enter route
 } 
 else
 {
  next('/login'); // go to '/login';
 }
}

const routes = [
  {
    path: "/",
    name: "Admin",
    component: ()=>import('../views/Admin.vue'),
    beforeEnter : guardMyroute,
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