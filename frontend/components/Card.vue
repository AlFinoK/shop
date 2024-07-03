<script setup lang="ts">
import { useProductStore } from '@/store/product.store'
import { useCartStore } from '@/store/cart.store'
const productStore = useProductStore()
const cartStore = useCartStore()

const products = computed(() => productStore.products)
const cartItems = computed(() => cartStore.cartItems)
const cartTotal = computed(() => cartStore.cartTotal)

onMounted(() => {
	productStore.fetchProducts()
})
</script>

<template>
	<div
		class="bg-white min-h-[300px] w-max flex flex-col justify-between"
		v-for="product in products"
		:key="product.id">
		<div class="p-4 flex flex-col items-center relative">
			<NuxtLink
				to="/"
				class="img">
				<span class="bg-green-100 absolute top-5 left-5 py-1 px-2 text-sm">
					{{ product.category }}
				</span>
				<span class="bg-green-100 absolute top-5 right-5 py-1 px-2 text-sm">
					{{ product.rating?.rate }}
				</span>
				<img
					class="w-[300px] h-[200px] object-contain mb-2"
					:src="product.image"
					alt="good img" />
			</NuxtLink>
			<h4 class="text-sm mb-2 min-h-[40px] w-[250px] text-center">
				{{ product.title }}
			</h4>
			<div class="flex items-center justify-between w-full px-6">
				<p class="text-[1rem] text-green-500 text-start">
					{{ `${product.price}$` }}
				</p>
				<button
					class="px-6 py-1 uppercase bg-green-400 text-white hover:bg-green-500"
					@click="cartStore.addToCart(product)">
					add to cart
				</button>
			</div>
		</div>
	</div>
</template>
