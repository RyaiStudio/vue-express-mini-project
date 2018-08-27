<template>
	<div class="columns">
		<div class="column is-one-quarter">
			<aside class="menu">
				<sidebar
					v-for="(aside, index) in asides" 
		            v-bind:todoAside="aside"
		            v-bind:key="index"
				></sidebar>
			</aside>
		</div>
		<div class="column">
			<bodycontent></bodycontent>
		</div>
	</div>
</template>

<script>
import SideBar from './SideBar'
import Container from './Container'

export default {
	props: ['asides'],
	components: {
		sidebar: SideBar,
		bodycontent: Container
	}
}
</script>