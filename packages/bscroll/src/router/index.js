import Vue from 'vue'
import VueRouter from 'vue-router'
import Fresh from '../views/fresh'
import TaobaoWorld from '../views/taobao-world'


Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/fresh',
    name: 'fresh',
    component: Fresh
  },
  {
    path: '/taobao-world',
    name: 'taobao-world',
    component: TaobaoWorld
  }
]

const router = new VueRouter({
  routes
})

export default router
