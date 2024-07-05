<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/store/product.store'
import { storeToRefs } from 'pinia'

// const route = useRoute()
// const productStore = useProductStore()
// const { product, loading } = storeToRefs(productStore)

// onMounted(async () => {
// 	const productId = route.params.id
// 	await productStore.fetchProductById(productId)
// })

const route = useRoute()
const productStore = useProductStore()
const { productById, loading } = storeToRefs(productStore)

onMounted(async () => {
	const productId = route.params.id
	await productStore.fetchProductById(productId)
})
</script>

<template>
	<section class="flex flex-col items-center justify-center min-h-[91vh]">
		<UiLoader v-if="loading"></UiLoader>
		<h3 class="text-2xl mb-8">Product full page</h3>
		<div
			v-if="productById"
			class="flex justify-between items-center bg-white rounded-sm px-5 py-[100px] w-[70vw]">
			<div class="">
				<NuxtImg
					class="w-[500px] object-contain"
					:src="productById.image"
					width="100"
					alt="image" />
			</div>
			<div class="w-[50%] flex flex-col gap-3">
				<h5 class="info bg-gray-300">Product: {{ productById.title }}</h5>
				<p class="info bg-slate-300">Description: {{ productById.description }}</p>
				<p class="info bg-yellow-300">Category: {{ productById.category }}</p>
				<p class="info bg-green-300">Price: ${{ productById.price }}</p>
				<p class="info bg-purple-300">Rating: {{ productById.rating.rate }}</p>
				<p class="info bg-gray-300">Count: {{ productById.rating.count }}</p>
				<NuxtLink
					to="/products"
					class="link border border-solid border-green-500 rounded-md px-5 py-3 text-green-500 w-max mt-10"
					>RETURN TO PRODUCTS</NuxtLink
				>
			</div>
		</div>
	</section>
</template>

<style scoped>
.info {
	@apply w-max max-w-[80%] py-1 px-3 rounded;
}
.link:hover {
	@apply underline;
}
</style>
