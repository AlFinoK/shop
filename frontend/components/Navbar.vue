<script setup lang="ts">
import { links } from '@/data/menu.data'

import { useCartStore } from '@/store/cart.store'
const cartStore = useCartStore()

const { cart } = storeToRefs(cartStore)
</script>

<template>
	<nav class="flex w-max gap-5">
		<NuxtLink
			class="link inline-flex gap-2 items-center relative"
			:to="link.to"
			v-for="link in links"
			:key="link.text">
			<NuxtImg
				:src="link.imgSrc"
				fit="contain"
				:alt="link.alt"
				width="26" />
			<span class="text-[.9rem]">{{ link.text }}</span>
			<span
				v-for="item in cart"
				v-if="link.cartItems"
				class="item"
				>{{ item.quantity }}</span
			>
			<!-- <span
				v-if="link.favItems"
				class="item"
				>0</span
			> -->
		</NuxtLink>
	</nav>
</template>

<style scoped>
.link:hover {
	@apply underline;
	text-decoration: underline 1px solid #000;
	text-underline-offset: 2px;
}

.item {
	@apply w-[20px] h-[20px] rounded-full border border-white absolute top-[-6px] left-[-6px] text-white flex items-center justify-center text-[12px];
}
</style>
