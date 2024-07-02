import { ref } from 'vue'
import axios from 'axios'
import type { ICard } from '../types/interfaces'

export default function useDataFetching(url: string) {
	const data = ref<ICard[]>([])
	const loading = ref<boolean>(false)

	const fetchData = async (): Promise<void> => {
		loading.value = true
		try {
			const response = await axios.get<ICard[]>(url)
			data.value = response.data
		} catch (err) {
			console.log(err)
			throw err
		} finally {
			loading.value = false
		}
	}

	return {
		data,
		loading,
		fetchData,
	}
}
