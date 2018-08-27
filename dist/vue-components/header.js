import Vue from 'vue'
import NavBrand from '../templates/header/NavBrand'
import NavMenu from '../templates/header/NavMenu'

var header = new Vue({
    el: '#navbar-header',
    data: (new elnav()).data,
    methods: {},
    components: { 
        navbrand: NavBrand, 
        navmenu: NavMenu
    }
})
