import * as React from 'react'
import PropTypes from 'prop-types'
import { Container, CssBaseline, ThemeProvider } from '@mui/material'

import Header from './header'
import theme from '../Theme'

interface ILayout {
    children: React.ReactNode
}

const Layout = ({ children }: ILayout) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <main>
                <Container maxWidth="xl">{children}</Container>
            </main>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
