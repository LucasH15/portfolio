import React from 'react'
import PropTypes from 'prop-types'
import { SvgIcon } from '@mui/material'
import { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon'

import { colors } from '../../Theme'

interface IDumbellIcon extends SvgIconProps {
    primarycolor?: string
}

function DumbellIcon({ primarycolor, ...props }: IDumbellIcon) {
    return (
        <SvgIcon {...props} htmlColor="transparent" viewBox="0 0 20 20">
            <path
                d="M16.85,4.17l.86-.86a.73.73,0,0,0-1-1l-.86.86L14.75,2.07a1.41,1.41,0,0,0-1.95,0l-.41.42a1.37,1.37,0,0,0-.45.69l-.48-.48a1.32,1.32,0,0,0-1.87,0c-.08.08-.68.68-.61.6A1.35,1.35,0,0,0,9,5.18L10.78,7l.61.61-3.8,3.8L5.13,8.92a1.33,1.33,0,0,0-1.88,0l-.6.6a1.33,1.33,0,0,0,0,1.88l.48.48a1.26,1.26,0,0,0-.59.34L2,12.73a1.39,1.39,0,0,0,0,2l1.13,1.13-.85.86a.72.72,0,0,0,0,1,.74.74,0,0,0,1,0l.85-.86,1.07,1.07a1.4,1.4,0,0,0,2,0l.52-.52a1.31,1.31,0,0,0,.34-.59l.48.48a1.32,1.32,0,0,0,1.87,0l.6-.61a1.32,1.32,0,0,0,0-1.87l-2.4-2.4,3.8-3.8,2.46,2.46a1.32,1.32,0,0,0,1.63.19,9.81,9.81,0,0,0,.85-.79,1.33,1.33,0,0,0,0-1.88l-.47-.47a1.24,1.24,0,0,0,.57-.34h0c.07-.08.6-.6.52-.53a1.35,1.35,0,0,0,.16-1.76A15.81,15.81,0,0,0,16.85,4.17Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
        </SvgIcon>
    )
}

DumbellIcon.propTypes = {
    primarycolor: PropTypes.string
}

export default DumbellIcon
