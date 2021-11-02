export default function anime(state = { loading: false, anime: [] }, action){
    switch (action.type) {
        case 'LOADING_ANIME':
            console.log(action.type)
            return state = {
                    ...state,
                    loading: action.loading
            }
        case 'ADD_ANIME':
            console.log(action.type)
            return state = {
                    ...state,
                    anime: action.anime
            }
        
        default:
            return state
    }
}
