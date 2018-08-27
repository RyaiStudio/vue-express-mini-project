<template>
<div id="nav-tranparent" class="navbar-menu">
    <div class="navbar-start">
        <urlmenu 
            v-for="(navi, index) in navis" 
            v-bind:todo="navi"
            v-bind:key="index"
        ></urlmenu>
    </div>
    <div class="navbar-end">
        <div class="navbar-item">
            <div class="field is-grouped">
                <navbuttons
                    v-for="(boot, index) in buttons" 
                    v-bind:button="boot"
                    v-bind:key="index"
                ></navbuttons>
            </div>
        </div>
    </div>
</div>   
</template>

<script>
import UrlMenu from './UrlMenu.vue'
import NavButtons from './NavButtons.vue'

export default {
    props: ['navis', 'buttons'],
    data: function() {
        return {}
    },
    components: { urlmenu: UrlMenu, navbuttons: NavButtons }
}
</script>