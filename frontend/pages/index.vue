<script setup></script>

<template>
	<div class="flex flex-col items-center justify-center min-h-[91vh] text-green-500">
		<div class="flex items-center justify-center max-w-[1200px] px-[15px] mx-auto w-full">
			<div class="max-w-[55%]">
				<h1 class="text-8xl mb-5">
					ONLINE <br />
					<span class="text-6xl">SHOPPING</span>
				</h1>
				<p class="text-xl max-w-[70%] mb-10">
					Discover the finest and highest quality products exclusively available at our store. Don't miss out
					on the best selection!
				</p>

				<NuxtLink
					to="/products"
					class="btn border border-solid border-green-500 rounded-md px-5 py-3"
					>Show products</NuxtLink
				>
			</div>
			<div>
				<NuxtImg
					src="/main-bg.jpg"
					alt="bg"
					width="500" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.btn:hover {
	@apply underline;
}
</style>
