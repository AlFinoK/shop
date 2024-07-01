<script setup lang="ts">
import { links } from './menu.data'
</script>

<template>
	<aside class="w-1/4 h-full min-h-screen px-10 py-8 bg-gray-300">
		<NuxtLink
			class="flex justify-center mb-10"
			to="/">
			<NuxtImg
				src="/logo.svg"
				alt="logo"
				width="140px" />
		</NuxtLink>
		<nav class="flex flex-col gap-4">
			<NuxtLink
				class="w-min link inline-flex gap-2 items-center"
				:to="link.to"
				v-for="link in links"
				:key="link.text">
				<NuxtImg
					:src="link.imgSrc"
					fit="contain"
					:alt="link.alt"
					width="20" />
				<span>{{ link.text }}</span>
			</NuxtLink>
		</nav>
	</aside>
</template>

<style scoped>
.link:hover {
	@apply underline;
	text-decoration: underline 1px solid #000;
	text-underline-offset: 2px;
}
</style>
