import { createWebHistory, createRouter } from "vue-router";

// function guardMyroute(to, from, next)
// {
//  var isAuthenticated= false;
// //this is just an example. You will have to find a better or 
// // centralised way to handle you localstorage data handling 
// if(localStorage.getItem('LoggedUser'))
//   isAuthenticated = true;
//  else
//   isAuthenticated= false;
//  if(isAuthenticated) 
//  {
//   next(); // allow to enter route
//  } 
//  else
//  {
//   next('/login'); // go to '/login';
//  }
// }

const routes = [
  {
    path: "/",
    component: ()=>import('../views/Admin.vue'),
    // beforeEnter : guardMyroute,
    children: [
      {
        path: '/',
        name: 'User',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component:  () => import('../views/Users.vue') 
      },
      {
        path: '/stars',
        name: 'Star',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Stars.vue')
      },
      {
        path: '/categories',
        name: 'Categories',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Categories.vue')
      },
      {
        path: '/video',
        name: 'Video',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Video.vue')
      },
      {
        path: '/video/edit',
        name: 'Video editing',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Video/Edit.vue')
      },
      {
        path: '/user/edit',
        name: 'Edit User',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/User/Edit.vue')
      },
      {
        path: '/subscription/edit',
        name: 'Editing subscriptions',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Subscription/Edit.vue')
      },
      {
        path: '/appeals',
        name: 'Customer Requests',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Appeals.vue')
      },
      {
        path: '/advertisment',
        name: 'Advertising Companies',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Advertisment.vue')
      },
      {
        path: '/advertisment/edit',
        name: 'Advertisment Edit',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Advertisment/Edit.vue')
      },
      {
        path: '/subscriptions',
        name: 'Subscription',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Subscriptions.vue')
      },
      {
        path: '/affiliate-program',
        name: 'Affiliate links',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AffiliateProgram.vue')
      },
  
      {
        path: '/notifications',
        name: 'Notifications',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Notifications.vue')
      },
    ]
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