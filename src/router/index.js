import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Global',
    component: () => import('../components/Global.vue'),
  },
  {
    path: '/done',
    name: 'Done',
    component: () => import('../components/Done.vue') 
  },
  {
    path: '/active',
    name: 'Actives',
    component: () => import('../components/Actives.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import ('../components/Search.vue'),
  },
  {
    path: '/search-data',
    name: 'SearchData',
    component: () => import ('../components/SearchData.vue'),
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router