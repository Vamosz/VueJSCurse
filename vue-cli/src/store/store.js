import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter";
import * as actions from "./actions"
import * as mutations from "./mutations"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters: {
        value: state => {
            return state.value
        }
    },
    //mutations is a sync method so you cant use in async! for that you should use actions!
    mutations,
    actions,
    modules:{
        counter
    }
});
