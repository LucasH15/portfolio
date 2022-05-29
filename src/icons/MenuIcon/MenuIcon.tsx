import React from 'react'
import PropTypes from 'prop-types'
import { SvgIcon } from '@mui/material'

import { colors } from '../../Theme'

interface IMenuIcon {
    primarycolor?: string
}

function MenuIcon({ primarycolor, ...props }: IMenuIcon) {
    return (
        <SvgIcon {...props} htmlColor="transparent" viewBox="0 0 20 20">
            <path
                d="M14,5.9H16a1,1,0,0,0,0-2H4.05a1,1,0,0,0,0,2H14Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M6.09,11h-2a1,1,0,0,1,0-2H16a1,1,0,0,1,0,2H9.5"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M4.05,16.1a1,1,0,0,1,0-2H16a1,1,0,0,1,0,2Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
        </SvgIcon>
    )
}

MenuIcon.propTypes = {
    primarycolor: PropTypes.string
}

export default MenuIcon
