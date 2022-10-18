<template>
	<div class="music-app">
		<div class="top">
			<top-nav
				v-if="topNavList.length > 0"
				:list="topNavList"
				:active-nav="activeTopNav"
				@route-to="handleRouteTo"
			></top-nav>
		</div>
		<div class="main">
			<div class="sidebar" v-show="visible">
				<side-menu
					:active-menu="activeMenu"
					@route-to="handleRouteTo"
				/>
			</div>
			<div class="content" @click="test">
				<router-view />
			</div>
		</div>
		<div class="bottom" v-show="visible"></div>
	</div>
</template>

<script lang="ts" setup>
	import { ref, computed } from 'vue'
	import SideMenu from './components/side-menu.vue'
	import TopNav from './components/top-nav.vue'
	import { useRoute, useRouter } from 'vue-router'
	const router = useRouter()
	const route = useRoute()

	const topNavList = computed(() => {
		return route.matched[1].children.map((route) => {
			return {
				path: route.path,
				name: route.meta?.name as string
			}
		})
	})

	const activeMenu = computed(() => {
		return route.matched[1]?.path || ''
	})

	const activeTopNav = computed(() => {
		return route.matched[2]?.path || ''
	})

	const visible = ref(true)
	const test = () => {
		// visible.value = !visible.value
	}

	const handleRouteTo = (path: string) => {
		router.push(path)
	}
</script>

<style lang="scss">
	.music-app {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.top {
			width: 100%;
			height: 50px;
			padding-left: 200px;
			background: var(--app-top-bg-color);
		}

		.main {
			flex: 1;
			display: flex;

			.sidebar {
				width: 200px;
				flex-shrink: 1;
				background: var(--app-sidebar-bg-color);
			}

			.content {
				flex-grow: 1;
				flex-shrink: 1;
			}
		}

		.bottom {
			height: 60px;
			width: 100%;
			background: var(--app-bottom-bg-color);
		}
	}
</style>
