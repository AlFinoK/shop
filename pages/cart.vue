<script setup></script>

<template>
	<section class="py-3 px-1 max-w-[1200px] my-0 mx-auto mt-[120px]">
		<div class="flex items-center justify-between mb-12">
			<h4 class="text-xl">Shopping cart</h4>
			<button class="btn text-red-400">Remove all</button>
		</div>

		<div class="grid grid-cols-4 items-center bg-slate-50 py-10 px-20 mb-10 rounded-md gap-4">
			<div>
				<img
					src=""
					alt="product img" />
			</div>
			<div>
				<p class="title">Bag</p>
			</div>
			<div class="flex items-center">
				<button class="btn-quantity">-</button>
				<span class="p-5">100</span>
				<button class="btn-quantity">+</button>
			</div>
			<div class="flex justify-center items-center gap-2.5">
				<div class="text-green-300">10.11$</div>
				<button class="btn text-red-400">Remove</button>
			</div>
		</div>

		<div class="flex justify-end">
			<p class="text-xl text-green-300">100.1$</p>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.btn:hover {
	@apply underline;
	text-decoration: underline 1px solid var(text-red-400);
	text-underline-offset: 2px;
}

.btn-quantity {
	@apply text-xl rounded-full border border-slate-300 w-[50px] h-[50px];
}
</style>
