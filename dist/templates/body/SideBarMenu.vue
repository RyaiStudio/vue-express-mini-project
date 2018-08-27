<template>
	<li><a v-bind:href="asideMenu.url">{{ asideMenu.content }}</a></li>
</template>
<script>
export default {
	props: ['asideMenu']
}
</script>