import * as React from 'react'
import { Link } from 'gatsby-plugin-react-intl'
import {
    AppBar,
    Button,
    Container,
    Grid,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from '@mui/material'
import { useIntl } from 'gatsby-plugin-react-intl'

import icon from '../images/icon.png'
import MenuIcon from '../icons/MenuIcon'
import { colors } from '../Theme'

const Header = () => {
    const intl = useIntl()
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    )

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Grid sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                        <img
                            src={icon}
                            width="50px"
                            alt="Memoji Lucas Hubert"
                        />
                    </Grid>

                    <Grid
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' }
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon primarycolor={colors.text.secondary} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    {intl.formatMessage({ id: 'home' })}
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Grid>
                    <Grid
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                            justifyContent: 'right'
                        }}
                    >
                        <img
                            src={icon}
                            width="50px"
                            alt="Memoji Lucas Hubert"
                        />
                    </Grid>
                    <Grid
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            component={Link}
                            to="/"
                        >
                            {intl.formatMessage({ id: 'home' })}
                        </Button>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
