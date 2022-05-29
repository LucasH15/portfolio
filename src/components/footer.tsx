import * as React from 'react'
import { Grid, Stack, ListItemButton } from '@mui/material'

import GithubIcon from '../icons/GithubIcon'
import LinkedInIcon from '../icons/LinkedInIcon'
import CodepenIcon from '../icons/CodepenIcon'
import { colors } from '../Theme'

const Footer = () => {
    return (
        <Grid
            component="footer"
            sx={{
                mt: 'auto',
                p: 4,
                backgroundColor: 'primary.main',
                color: 'text.secondary'
            }}
        >
            <Stack direction="row" justifyContent="center">
                <ListItemButton
                    component="a"
                    href="https://github.com/LucasH15"
                    sx={{ flexGrow: 0 }}
                >
                    <GithubIcon primarycolor={colors.white.main} />
                </ListItemButton>

                <ListItemButton
                    component="a"
                    href="https://www.linkedin.com/in/lucas-hubert-8a3b36141/"
                    sx={{ flexGrow: 0 }}
                >
                    <LinkedInIcon primarycolor={colors.white.main} />
                </ListItemButton>

                <ListItemButton
                    component="a"
                    href="https://codepen.io/Lucas_15"
                    sx={{ flexGrow: 0 }}
                >
                    <CodepenIcon primarycolor={colors.white.main} />
                </ListItemButton>
            </Stack>
        </Grid>
    )
}

export default Footer
