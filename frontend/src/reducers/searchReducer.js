export default function query(state = '', action){
    switch (action.type) {
        case 'SEARCHING_QUERY':
            console.log(action.query)
            return state = action.query        
        default:
            return state
    }
}
