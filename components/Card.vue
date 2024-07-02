<script setup lang="ts">
import type { ICard } from './interfaces'

const props = defineProps<{
	data: ICard[]
}>()
</script>

<template>
	<div
		class="bg-zinc-100 min-h-[300px] w-max flex flex-col justify-between"
		v-for="item in data"
		:key="item.id">
		<div class="p-4 flex flex-col items-center relative">
			<NuxtLink
				to="/"
				class="img">
				<span class="bg-green-100 absolute top-5 left-5 py-1 px-2 text-sm">
					{{ item.category }}
				</span>
				<span class="bg-green-100 absolute top-5 right-5 py-1 px-2 text-sm">
					{{ item.rating?.rate }}
				</span>
				<img
					class="w-[300px] h-[200px] object-contain mb-2"
					:src="item.image"
					alt="good img" />
			</NuxtLink>
			<h4 class="text-sm mb-2 min-h-[40px] w-[250px] text-center">
				{{ item.title }}
			</h4>
			<div class="flex items-center justify-between w-full px-6">
				<p class="text-[1rem] text-green-500 text-start">
					{{ `${item.price}$` }}
				</p>
				<button class="px-6 py-1 uppercase bg-green-400 text-white hover:bg-green-500">buy</button>
			</div>
		</div>
	</div>
</template>
