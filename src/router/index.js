import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '../layouts/MainLayout.vue'
import BlankLayout from '../layouts/BlankLayout.vue'

import HomeView from '../views/HomeView.vue'
import TesteView from '../views/TesteView.vue'
import InfoView from '../views/InfoView.vue'

import OnePageDemo from '../onepages/demo/Index.vue'
import BrainrotView from '../onepages/brainrot/Index.vue'

const routes = [
  // HUB (site-mãe)
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'home', component: HomeView },

      // rotas internas "escondidas"
      { path: '_/teste', name: 'teste', component: TesteView },
      { path: '_/info', name: 'info', component: InfoView },
    ],
  },

  // ONEPAGES comerciais, fáceis de digitar
  {
    path: '/demo',
    component: BlankLayout,
    children: [{ path: '', name: 'demo', component: OnePageDemo }],
  },
  {
    path: "/brainrot",
    component: BlankLayout,
    children: [
      {
        path: "",
        component: BrainrotView   ,
      },
    ],
  }


  // no futuro:
  // { path: '/naruto', component: BlankLayout, children: [{ path: '', component: () => import('../onepages/naruto/Index.vue') }] },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
