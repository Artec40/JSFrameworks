import Vue from 'vue'
import Vuex from 'vuex'
import { informerState } from './informerState'
import { decksState } from './decksState'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        decks: decksState,
        informer: informerState,
    }
})