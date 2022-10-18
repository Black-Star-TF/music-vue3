import type { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
	path: 'video',
	redirect: '/video/video',
	component: () => import('@/views/video/index.vue'),
	meta: {
		name: '视频'
	},
	children: [
		{
			path: 'video',
			component: () => import('@/views/video/video/index.vue'),
			meta: {
				name: '视频'
			}
		},
		{
			path: 'mv',
			component: () => import('@/views/video/mv/index.vue'),
			meta: {
				name: 'MV'
			}
		}
	]
}

export default route
