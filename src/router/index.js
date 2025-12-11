import { createRouter, createWebHashHistory } from 'vue-router'

import { getRandomKey } from '@/utils/helpers'
import MainView from '@/views/MainView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'main',
      path: '/:key([a-zA-Z0-9]{43})',
      component: MainView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: {
        name: 'main',
        params: { key: getRandomKey() }
      }
    }
  ]
})

export default router
