import type { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
	path: 'private-fm',
	component: () => import('@/views/private-fm/index.vue'),
	meta: {
		name: '私人FM'
	}
}

export default route
