<template>
	<ul class="top-nav">
		<li
			v-for="nav in list"
			:key="nav.path"
			class="nav-item"
			:class="{ active: activeNav.indexOf(nav.path) !== -1 }"
			@click="routeTo(nav.path)"
		>
			{{ nav.name }}
		</li>
	</ul>
</template>

<script lang="ts" setup>
	import { withDefaults } from 'vue'
	const props = withDefaults(
		defineProps<{
			list: Array<{ path: string; name: string }>
			activeNav: string
		}>(),
		{
			list: () => [],
			activeNav: ''
		}
	)

	const $emit = defineEmits(['routeTo'])
	const routeTo = (path: string) => {
		$emit('routeTo', path)
	}
</script>

<style lang="scss">
	.top-nav {
		height: 100%;
		align-self: flex-start;
		display: flex;
		align-items: center;
		font-size: 14px;
		.nav-item {
			cursor: pointer;
			color: var(--app-top-nav-color);
			font-weight: 400;
			&:hover {
				color: var(--app-top-nav-hover-color);
				font-weight: 600;
			}
			&.active {
				color: var(--app-top-nav-active-color);
				font-weight: 600;
			}

			margin-left: 30px;

			&:first-of-type {
				margin-left: 15px;
			}
		}
	}
</style>
