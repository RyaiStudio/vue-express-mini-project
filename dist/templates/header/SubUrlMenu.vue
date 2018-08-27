<template>
	<a class="navbar-item" v-bind:href="subtodo.url">{{subtodo.content}}</a>
</template>
<script>
	export default {
		props: ['subtodo']
	}
</script>