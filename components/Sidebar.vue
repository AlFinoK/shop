<script setup lang="ts">
import { links } from '@/data/menu.data'
</script>

<template>
	<aside class="min-w-[250px] w-max h-inherit min-h-screen px-10 py-8 bg-gray-300 relative">
		<div class="fixed">
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
		</div>
	</aside>
</template>

<style scoped>
.link:hover {
	@apply underline;
	text-decoration: underline 1px solid #000;
	text-underline-offset: 2px;
}
</style>
