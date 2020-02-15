import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import * as auth from '../services/AuthService'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/auth/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (!auth.isLoggedIn()) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/auth/Register.vue'),
    beforeEnter: (to, from, next) => {
      if (!auth.isLoggedIn()) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/dashboard',
    name: 'dash-board',
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'
       ),
    // beforeEnter: (to, from, next) => {
    //   if (auth.isLoggedIn()) {
    //     next()
    //   } else {
    //     next('/login')
    //   }
    // }
  }
]

const router = new VueRouter({
  routes
})

export default router
