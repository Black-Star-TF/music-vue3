import type { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
	path: 'discovery',
	redirect: '/discovery/rcmd',
	component: () => import('@/views/discovery/index.vue'),
	meta: {
		name: '发现音乐'
	},
	children: [
		{
			path: 'rcmd',
			component: () => import('@/views/discovery/rcmd/index.vue'),
			meta: {
				name: '发现音乐'
			}
		},
		{
			path: 'playlist',
			component: () => import('@/views/discovery/playlist/index.vue'),
			meta: {
				name: '歌单'
			}
		},
		{
			path: 'radio',
			component: () => import('@/views/discovery/radio/index.vue'),
			meta: {
				name: '主播电台'
			}
		},
		{
			path: 'charts',
			component: () => import('@/views/discovery/charts/index.vue'),
			meta: {
				name: '排行榜'
			}
		},
		{
			path: 'artist',
			component: () => import('@/views/discovery/artist/index.vue'),
			meta: {
				name: '歌手'
			}
		},
		{
			path: 'newest',
			component: () => import('@/views/discovery/newest/index.vue'),
			meta: {
				name: '最新音乐'
			}
		}
	]
}

export default route
