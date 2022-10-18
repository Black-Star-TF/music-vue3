<template>
	<div class="side-menu">
		<div class="user-profile"></div>
		<div class="menu-wrapper">
			<div
				:class="[
					'menu-item',
					{ active: `/${menu.path}` === activeMenu }
				]"
				v-for="menu in commonMenus"
				:key="menu.path"
				@click="routeTo(menu.path)"
			>
				{{ menu.meta?.name }}
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { commonMenus } from '@/router/index'
	defineProps({
		activeMenu: {
			type: String,
			default: ''
		}
	})

	const $emit = defineEmits(['routeTo'])
	const routeTo = (path: string) => {
		$emit('routeTo', `/${path}`)
	}
</script>

<style lang="scss">
	.side-menu {
		width: 100%;
		height: 100%;

		.user-profile {
			width: 100%;
			height: 60px;
		}

		.menu-wrapper {
			height: calc(100% - 60px);
			padding-right: 8px;
			box-sizing: border-box;
			overflow-y: auto;
			.menu-item {
				height: 35px;
				line-height: 35px;
				font-size: 14px;
				padding-left: 20px;
				font-weight: 550;
				color: var(--sidebar-menu-text-color);
				cursor: pointer;
				&:hover {
					background: var(--sidebar-menu-hover-bg);
				}
				&.active {
					background: var(--sidebar-menu-active-bg);
					color: var(--sidebar-menu-text-active-color);
				}
			}
		}
	}
</style>
