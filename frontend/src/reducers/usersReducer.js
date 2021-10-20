const usersReducer = (state = {users: [], loading: false}, action) => {
    switch (action.type) {
        case 'LOADING_USERS':
            return {
                ...state,
                users: [...state.users],
                loading: true
            }
        default:
            return state
    }
}
export default usersReducer