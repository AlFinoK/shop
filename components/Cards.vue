<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/store/product.store'
import Card from '@/components/Card.vue'

const productStore = useProductStore()
const { loading, error } = storeToRefs(productStore)

const fetchProducts = productStore.fetchProducts

onMounted(fetchProducts)
</script>

<template>
	<div class="flex flex-wrap gap-8 justify-center">
		<UiLoader v-if="loading" />
		<Card />
		<div
			class="text-red-500"
			v-if="error">
			No products available
		</div>
	</div>
</template>
