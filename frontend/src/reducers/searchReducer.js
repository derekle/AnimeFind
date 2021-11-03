const initialState = {text: '', url: ''}
export default function query(state = initialState, action) {
    switch (action.type) {
        case 'CLEAR_QUERY':
            console.log(action.query)
            return initialState
        case 'SEARCHING_QUERY':
            console.log(action.query)
            return action.query
        default:
            return state
    }
}
