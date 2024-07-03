import { defineStore } from 'pinia'
import type { IProduct } from '@/types/interfaces'

interface ICartState {
	cart: IProduct[]
}

const defaultVal: ICartState = {
	cart: [],
}

export const useCartStore = defineStore('cart', {
	state: (): ICartState => defaultVal,
	actions: {
		addToCart(product: IProduct): void {
			this.cart.push(product)
		},
		removeFromCart(productId: number): void {
			this.cart = this.cart.filter((product) => product.id !== productId)
		},
	},
	getters: {
		cartItems: (state): number => state.cart.reduce((total, product) => total + 1, 0),
		cartTotal: (state): number => state.cart.reduce((total, product) => total + product.price, 0),
	},
})
