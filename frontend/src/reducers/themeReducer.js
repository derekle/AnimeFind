export default function theme(state = null, action){
    switch (action.type) {
        case 'SET_THEME':
            console.log(action.type)
            return state = action.theme        
        default:
            return state
    }
}
