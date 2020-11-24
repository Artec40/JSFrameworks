export const informerState = {
    namespaced: true,
    state: {
        // informerInfo has 3 states :'none', 'app', 'api'. States depends on Header's value.
        informerData: 'none'
    },
    getters: {
        INFORMER_DATA: state => {
            return state.informerData
        }
    },
    mutations: {
        CHANGE_INFO_TO_APP(state) {
            state.informerData = 'app'
        },
        CHANGE_INFO_TO_API(state) {
            state.informerData = 'api'
        }
    }
}
