<script setup lang="ts">
import { links } from '@/data/menu.data'
</script>

<template>
	<nav class="flex w-max gap-3">
		<NuxtLink
			class="link inline-flex gap-2 items-center"
			:to="link.to"
			v-for="link in links"
			:key="link.text">
			<NuxtImg
				:src="link.imgSrc"
				fit="contain"
				:alt="link.alt"
				width="26" />
			<span class="text-[.9rem]">{{ link.text }}</span>
		</NuxtLink>
	</nav>
</template>

<style scoped>
.link:hover {
	@apply underline;
	text-decoration: underline 1px solid #000;
	text-underline-offset: 2px;
}
</style>
