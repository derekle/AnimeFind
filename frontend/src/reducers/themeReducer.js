import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// const darkTheme = createTheme({ palette: { mode: 'dark' } });

const themeReducer = (state = { theme: null }, action) => {
    switch (action.type) {
        case 'SETTING_THEME':
            console.log(action.type)
            return {
                ...state,
                theme: createTheme({ palette: { mode: 'dark' } })
            }
        default:
            return state
    }
}

export default themeReducer