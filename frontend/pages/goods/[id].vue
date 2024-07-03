<script setup>
const route = useRoute()
const params = route.params
</script>

<template>
	<div>{{ params.id }}</div>
</template>

<style lang="scss" scoped></style>
