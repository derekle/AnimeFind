export default function anime(state = [], action){
    switch (action.type) {
        case 'LOADING_ANIME':
            console.log(action.type)
            return state
        case 'ADD_ANIME':
            console.log(action.type)
        return state
        
        default:
            return state
    }
}
