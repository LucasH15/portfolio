import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const SPACING = 4
const TITLE_FONT = ['Patua One', 'cursive'].join(',')

export const colors = {
    primary: {
        main: '#356ADB'
    },
    secondary: {
        main: '#EBC975'
    },
    text: {
        primary: '#1A1404',
        secondary: '#FFFFFF'
    }
}

let theme = createTheme({
    spacing: SPACING,
    palette: {
        ...colors,
        tonalOffset: 0.1
    },
    typography: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        h1: {
            fontFamily: TITLE_FONT
        },
        h2: {
            fontFamily: TITLE_FONT
        },
        h3: {
            fontFamily: TITLE_FONT
        },
        h4: {
            fontFamily: TITLE_FONT
        },
        h5: {
            fontFamily: TITLE_FONT
        },
        h6: {
            fontFamily: TITLE_FONT
        },
        subtitle1: {
            fontFamily: TITLE_FONT
        },
        subtitle2: {
            fontFamily: TITLE_FONT
        }
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    textTransform: 'none',
                    minWidth: 0,
                    '&:hover': {
                        boxShadow: 'none'
                    }
                },
                text: {
                    padding: 0,
                    '&:hover': {
                        backgroundColor: 'transparent'
                    }
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    '.MuiButton-root[href]': {
                        marginLeft: SPACING * 4,
                        marginRight: SPACING * 4
                    }
                }
            }
        }
    }
})

theme = responsiveFontSizes(theme)

export default theme
