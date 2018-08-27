<template>
	<div class="aside-devider">
		<p class="menu-label"> {{ todoAside.label }} </p>
		<ul class="menu-list">
			<asidemenu 
				v-for="(item, index) in todoAside.links" 
	            v-bind:asideMenu="item"
	            v-bind:key="index"
			></asidemenu>
		</ul>
	</div>
</template>

<script>
import SideBarMenu from './SideBarMenu'

export default {
	props: ['todoAside'],
	components: {
		asidemenu: SideBarMenu 
	}
}
</script>