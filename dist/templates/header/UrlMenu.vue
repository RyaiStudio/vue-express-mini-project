<template>
	<a v-if="todo.nosub" class="navbar-item" v-bind:href="todo.url" >
		{{ todo.content }}
	</a>
	<div v-else class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link"  v-bind:href="todo.url" >{{ todo.content }}</a>
        <div class="navbar-dropdown is-boxed">
        	<!-- sub-menu component -->
            <suburlmenu
				v-for="(subitem, index) in todo.subs" 
	            v-bind:subtodo="subitem"
	            v-bind:key="index"
			></suburlmenu>
        </div>
    </div>
</template>

<script>
import SubUrlMenu from './SubUrlMenu.vue'

export default {
	props: ['todo'],
	components: { suburlmenu: SubUrlMenu }
}
</script>