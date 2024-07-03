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

export const useProductStore = defineStore('product', {
	state: () => defaultVal,
	actions: {
		async fetchProducts(): Promise<void> {
			this.loading = true
			this.error = null
			try {
				const res = await axios.get<IProduct[]>(`${baseApiUrl}products/`)
				this.products = res.data
			} catch (error: any) {
				this.error = error.message || 'Failed to fetch products'
			} finally {
				this.loading = false
			}
		},
	},
})
