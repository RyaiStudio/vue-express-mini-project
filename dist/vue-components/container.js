import Vue from 'vue'
import SectionContainer from '../templates/body/SectionContainer'

var content = new Vue({
    el: '#main-content',
    data: (new elnav()).data,
    methods: {},
    components: { thecontainer: SectionContainer }
})