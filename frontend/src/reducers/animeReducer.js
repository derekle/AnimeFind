const initialState = {loading: false, anime: []}
export default function anime(state = initialState, action) {
    switch (action.type) {
        case 'LOADING_ANIME':
            console.log(action.type)
            return {
                    ...state,
                    loading: action.loading
            }
        case 'ADD_ANIME':
            console.log(action.type)
            return {
                    ...state,
                    anime: action.anime
            }
        case 'CLEAR_DATA':
            console.log(action.type)
            return initialState
        default:
            return state
    }
}
