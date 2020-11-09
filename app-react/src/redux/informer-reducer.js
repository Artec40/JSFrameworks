const CHANGE_INFO_TO_APP = 'CHANGE_INFO_TO_APP'
const CHANGE_INFO_TO_API = 'CHANGE_INFO_TO_API'

let initialState = {
    // informerInfo has 3 states :'none', 'app', 'api'. States depends on Header's value.
    informerData: 'none'
}

const informerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INFO_TO_APP: {
            return {
                ...state,
                informerData: 'app'
            }
        }
        case CHANGE_INFO_TO_API: {
            return {
                ...state,
                informerData: 'api'
            }
        }
        default:
            return state
    }
}

export const ChangeInfoToApp = () => ({type: CHANGE_INFO_TO_APP})
export const ChangeInfoToApi = () => ({type: CHANGE_INFO_TO_API})

export default informerReducer
