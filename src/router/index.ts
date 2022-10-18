import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/index.vue'
import discoveryRoute from './discovery/index'
import videoRoute from './video/index'
import privateFMRoute from './private-fm/index'
import followRoute from './follow/index'
const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: 'discovery',
		component: Home,
		children: [discoveryRoute, videoRoute, privateFMRoute, followRoute]
	}
]

const router = createRouter({
	routes,
	history: createWebHashHistory()
})

const commonMenus = [discoveryRoute, videoRoute, privateFMRoute, followRoute]

export { commonMenus }

export default router
