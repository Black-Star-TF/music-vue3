import type { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
	path: 'follow',
	component: () => import('@/views/follow/index.vue'),
	meta: {
		name: '关注'
	}
}

export default route
