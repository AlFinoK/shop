<script>
import { defineComponent, onMounted } from 'vue'
import useDataFetching from './useDataFetching.service'
import { baseApiUrl } from '@/consts/api'

export default defineComponent({
	setup() {
		const { data, loading, fetchData } = useDataFetching(`${baseApiUrl}products/`)
		onMounted(fetchData)

		return {
			data,
			loading,
		}
	},
})
</script>
<template>
	<div>
		<div v-if="loading">Loading...</div>
		<div v-else-if="data">
			<ul>
				<li
					v-for="item in data"
					:key="item.id">
					{{ item.id }}
				</li>
			</ul>
		</div>
	</div>
</template>
