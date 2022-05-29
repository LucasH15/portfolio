import * as React from 'react'
import PropTypes from 'prop-types'
import {
    Container,
    CssBaseline,
    GlobalStyles,
    ThemeProvider
} from '@mui/material'

import theme from '../Theme'
import Header from './header'
import Footer from './footer'

interface ILayout {
    children: React.ReactNode
}

const Layout = ({ children }: ILayout) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles
                styles={{
                    '#gatsby-focus-wrapper': {
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column'
                    }
                }}
            />
            <Header />
            <main>
                <Container maxWidth="xl">{children}</Container>
            </main>
            <Footer />
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
