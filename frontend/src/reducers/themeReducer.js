// const theme = (state = { theme: null }, action) => {
//     switch (action.type) {
//         case 'SETTING_THEME':
//             console.log(action.type)
//             return {
//                 ...state,
//                 theme: createTheme({ palette: { mode: 'dark' } })
//             }
//         default:
//             return state
//     }
// }

// export default themeReducer





export default function theme(state = null, action){
    switch (action.type) {
        case 'SET_THEME':
            console.log(action.type)
            return state = action.theme        
        default:
            return state
    }
}
