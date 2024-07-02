<script setup>
import { onMounted } from 'vue'
import useDataFetching from '@/data/useDataFetching.service'
import { baseApiUrl } from '@/consts/api'
import Card from '@/components/Card.vue'

const { data, loading, fetchData } = useDataFetching(`${baseApiUrl}products/`)
onMounted(fetchData)
</script>

<template>
	<div class="flex flex-wrap gap-4 justify-center">
		<div v-if="loading">Loading...</div>
		<Card
			v-else-if="data"
			:data="data" />
	</div>
</template>
