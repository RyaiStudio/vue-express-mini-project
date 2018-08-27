<template>
	<div class="navbar-brand">
	    <a class="navbar-item" :href="url">
	      <img  :src="logo" :alt="imgalt" width="112" height="28">
	    </a>
	    <div class="navbar-burger burger" data-target="nav-tranparent">
	        <span></span>
	        <span></span>
	        <span></span>
	    </div>
	</div>
</template>

<script>
export default {
	props: ['url', 'logo', 'imgalt']
}
</script>