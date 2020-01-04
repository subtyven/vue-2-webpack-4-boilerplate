import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex)
const store = new Vuex.Store({
    mutations: {
        hello (){
            console.log("hello boomers");
        }
    }
});

export default store;
