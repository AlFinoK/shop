import axios from 'axios'
import { baseApiUrl } from '@/consts/api'
import type { IProduct } from '@/types/interfaces'

interface IData {
	products: IProduct[]
	loading: boolean
	error: string | null
}

const defaultVal: IData = {
	products: [],
	loading: false,
	error: null,
}

export const useProductStore = defineStore('product', () => {
	const products = ref<IProduct[]>([])
	const loading = ref(false)
	const error = ref<string | null>(null)

	const fetchProducts = async (): Promise<void> => {
		loading.value = true
		error.value = null
		try {
			const res = await axios.get<IProduct[]>(`${baseApiUrl}products/`)
			products.value = res.data
		} catch (error: any) {
			error.value = error.message || 'Failed to fetch products'
		} finally {
			loading.value = false
		}
	}

	return { products, loading, error, fetchProducts }
})
