<script setup lang="ts"></script>

<template>
	<aside class="w-1/4 h-full min-h-screen px-10 py-8 bg-gray-300">
		<NuxtLink
			class="flex justify-center mb-10"
			to="/logo">
			<NuxtImg
				src="/logo.svg"
				alt="logo"
				width="140px" />
		</NuxtLink>
		<nav class="flex flex-col gap-4">
			<NuxtLink
				class="w-min link inline-flex gap-4 items-center"
				to="/">
				<NuxtImg
					src="/home.svg"
					fit="contain"
					alt="home link"
					width="20" />
				<span>Home</span>
			</NuxtLink>
			<NuxtLink
				class="w-min link inline-flex gap-4 items-center"
				to="/products">
				<NuxtImg
					src="/products.svg"
					fit="contain"
					alt="products link"
					width="20" />
				<span>Products</span>
			</NuxtLink>
			<NuxtLink
				class="w-min link inline-flex gap-4 items-center"
				to="/payments">
				<NuxtImg
					src="/payments.svg"
					fit="contain"
					alt="payments link"
					width="20" />
				<span>Payments</span>
			</NuxtLink>
			<NuxtLink
				class="w-min link inline-flex gap-4 items-center"
				to="/orders">
				<NuxtImg
					src="/orders.svg"
					fit="contain"
					alt="orders link"
					width="20" />
				<span>Orders</span>
			</NuxtLink>
			<NuxtLink
				class="w-min link inline-flex gap-4 items-center"
				to="/customers">
				<NuxtImg
					src="/customers.svg"
					fit="contain"
					alt="customers link"
					width="20" />
				<span>Customers</span>
			</NuxtLink>
			<NuxtLink
				class="w-min link inline-flex gap-4 items-center"
				to="/feedback">
				<NuxtImg
					src="/feedback.svg"
					fit="contain"
					alt="feedback link"
					width="20" />
				<span>Feedback</span>
			</NuxtLink>
			<NuxtLink
				class="w-min link inline-flex gap-4 items-center"
				to="/settings">
				<NuxtImg
					src="/settings.svg"
					fit="contain"
					alt="settings link"
					width="20" />
				<span>Settings</span>
			</NuxtLink>
			<NuxtLink
				class="w-min link inline-flex gap-4 items-center"
				to="/help">
				<NuxtImg
					src="/help.svg"
					fit="contain"
					alt="help link"
					width="20" />
				<span>Help</span>
			</NuxtLink>
		</nav>
	</aside>
</template>

<style scoped>
.link:hover {
	@apply underline;
	text-decoration: underline 1px solid #000;
	text-underline-offset: 2px;
}
</style>
