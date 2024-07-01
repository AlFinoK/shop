<script setup lang="ts">
import { ref } from 'vue'
import Button from '../ui/Button.vue'

const count: Ref = ref(0)

const inc = (): number => {
	console.log(count.value)
	return ++count.value
}

const dec = (): number | null => {
	if (count.value <= 0) {
		return null
	} else {
		return --count.value
	}
}
</script>

<template>
	<div class="w-full bg-slate-700">
		<h1>{{ count }}</h1>
		<button @click="inc">button+</button>
		<button @click="dec">button-</button>
		<input
			class="text-xl"
			@input="inc" />
		<LayoutCards />
	</div>
</template>
