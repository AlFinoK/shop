<script setup>
import { useCartStore } from '~/store/cart.store'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { cart, cartTotal } = storeToRefs(cartStore)

const increaseQuantity = (product) => {
	cartStore.increaseQuantity(product)
}
const decreaseQuantity = (product) => {
	cartStore.decreaseQuantity(product)
}
const clearAllCart = () => {
	cartStore.clearCart()
}
const removeFromCart = (product) => {
	cartStore.removeFromCart(product)
}
</script>

<template>
	<section class="py-3 px-1 max-w-[1200px] my-0 mx-auto mt-[120px]">
		<div class="flex items-center justify-between mb-12">
			<h4 class="text-xl">Shopping cart</h4>
			<button
				class="btn text-red-400"
				@click="clearAllCart">
				Remove all
			</button>
		</div>

		<div
			v-if="cart.length > 0"
			v-for="item in cart"
			:key="item.product.id"
			class="bg-white py-10 px-20 mb-5 rounded-md gap-4">
			<div class="flex items-center justify-between gap-4 w-full">
				<img
					:src="item.product.image"
					alt="product img"
					class="w-20 h-20 object-contain" />
				<div>
					<p class="title w-[250px]">{{ item.product.title }}</p>
				</div>
				<div class="flex items-center">
					<button
						class="btn-quantity"
						@click="decreaseQuantity(item.product)"
						:disabled="item.quantity <= 1">
						-
					</button>
					<span class="p-5">{{ item.quantity }}</span>
					<button
						class="btn-quantity"
						@click="increaseQuantity(item.product)">
						+
					</button>
				</div>
				<div class="flex justify-center items-center gap-2.5">
					<div class="text-green-300">{{ (item.product.price * item.quantity).toFixed(2) }}$</div>
					<button
						class="btn text-red-400"
						@click="removeFromCart(item.product.id)">
						Remove
					</button>
				</div>
			</div>
		</div>

		<div v-else>
			<p class="text-center text-[48px]">Your cart is empty</p>
		</div>

		<div class="flex justify-end relative">
			<span class="amount text-right">Amount:</span>
			<p class="text-[40px] text-green-500 mt-8">{{ cartTotal.toFixed(2) }}$</p>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.btn:hover {
	@apply underline;
	text-decoration: underline 1px solid var(text-red-400);
	text-underline-offset: 2px;
}
.amount {
	position: absolute;
	top: 0;
	right: 0;
	width: 20%;
	border-top: 1px solid white;
	display: inline-block;
}

.btn-quantity {
	@apply text-xl rounded-full border border-slate-300 w-[50px] h-[50px];
}
</style>
