import React from 'react'
import PropTypes from 'prop-types'
import { SvgIcon } from '@mui/material'

import { colors } from '../../Theme'

interface IPersonalScheduleIcon {
    primarycolor?: string
}

function MenuIcon({ primarycolor, ...props }: IPersonalScheduleIcon) {
    return (
        <SvgIcon {...props} htmlColor="transparent" viewBox="0 0 20 20">
            <path
                d="M17.93,10v0a1.44,1.44,0,0,0-1.5-1.36l-12.86,0A1.45,1.45,0,0,0,2.07,10a1.43,1.43,0,0,0,1.5,1.36l12.86,0A1.43,1.43,0,0,0,17.93,10Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M17.93,15.41h0A1.45,1.45,0,0,0,16.43,14L3.57,14a1.37,1.37,0,1,0,0,2.72l12.86,0A1.43,1.43,0,0,0,17.93,15.41Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M17.93,4.64h0a1.44,1.44,0,0,0-1.5-1.36l-12.86,0A1.44,1.44,0,0,0,2.07,4.6,1.44,1.44,0,0,0,3.57,6L16.43,6A1.42,1.42,0,0,0,17.93,4.64Z"
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
