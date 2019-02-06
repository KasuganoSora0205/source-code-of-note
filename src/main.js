import Vue from 'vue'
import store from './store'
import app from './App.vue'
new Vue({
    el:'#app',
    store,
    components:{
        app
    },
    template:'<app/>'
})