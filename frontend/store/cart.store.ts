import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { IProduct } from '@/types/interfaces'

export const useCartStore = defineStore('cart', () => {
	const cart = ref<{ product: IProduct; quantity: number }[]>([])

	const addToCart = (product: IProduct) => {
		const item = cart.value.find((p) => p.product.id === product.id)
		if (item) {
			item.quantity += 1
		} else {
			cart.value.push({ product, quantity: 1 })
		}
	}

	const removeFromCart = (productId: number) => {
		cart.value = cart.value.filter((item) => item.product.id !== productId)
	}

	const clearCart = (): void => {
		cart.value = []
	}

	const increaseQuantity = (product: IProduct) => {
		const item = cart.value.find((p) => p.product.id === product.id)
		if (item) {
			item.quantity += 1
		}
	}

	const decreaseQuantity = (product: IProduct) => {
		const item = cart.value.find((p) => p.product.id === product.id)
		if (item) {
			if (item.quantity > 1) {
				item.quantity -= 1
			} else {
				removeFromCart(product.id)
			}
		}
	}

	const getQuantity = (product: IProduct) => {
		const item = cart.value.find((p) => p.product.id === product.id)
		return item ? item.quantity : 0
	}

	const cartItems = computed(() => cart.value.length)

	const cartTotal = computed(() => cart.value.reduce((total, item) => total + item.product.price * item.quantity, 0))

	return {
		cart,
		addToCart,
		removeFromCart,
		clearCart,
		increaseQuantity,
		decreaseQuantity,
		getQuantity,
		cartItems,
		cartTotal,
	}
})
