<script setup lang="ts"></script>

<template>
	<header class="bg-gray-400 w-full">
		<div class="flex items-center justify-between py-3 px-1 max-w-[1200px] my-0 mx-auto">
			<NuxtLink to="/">
				<NuxtImg
					src="/logo.svg"
					alt="logo"
					width="60"
					height="60" />
			</NuxtLink>
			<Navbar />
		</div>
	</header>
</template>
