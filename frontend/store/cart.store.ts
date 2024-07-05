import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { IProduct } from '@/types/interfaces'

export const useCartStore = defineStore('cart', () => {
	// Состояние корзины
	const cart = ref<{ product: IProduct; quantity: number }[]>([])

	// Добавление товара в корзину
	const addToCart = (product: IProduct) => {
		const item = cart.value.find((p) => p.product.id === product.id)
		if (item) {
			item.quantity += 1
		} else {
			cart.value.push({ product, quantity: 1 })
		}
	}

	// Удаление товара из корзины
	const removeFromCart = (productId: number) => {
		cart.value = cart.value.filter((item) => item.product.id !== productId)
	}

	// Очистка корзины
	const clearCart = (): void => {
		cart.value = []
	}

	// Увеличение количества товара в корзине
	const increaseQuantity = (product: IProduct) => {
		const item = cart.value.find((p) => p.product.id === product.id)
		if (item) {
			item.quantity += 1
		}
	}

	// Уменьшение количества товара в корзине
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

	// Получение количества товара в корзине
	const getQuantity = (product: IProduct) => {
		const item = cart.value.find((p) => p.product.id === product.id)
		return item ? item.quantity : 0
	}

	// Количество товаров в корзине
	const cartItems = computed(() => cart.value.length)

	// Общая сумма корзины
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
