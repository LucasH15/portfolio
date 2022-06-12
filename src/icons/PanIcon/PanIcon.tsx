import React from 'react'
import PropTypes from 'prop-types'
import { SvgIcon } from '@mui/material'
import { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon'

import { colors } from '../../Theme'

interface IPanIcon extends SvgIconProps {
    primarycolor?: string
}

function PanIcon({ primarycolor, ...props }: IPanIcon) {
    return (
        <SvgIcon {...props} htmlColor="transparent" viewBox="0 0 20 20">
            <path
                d="M14.66,4.85a1.82,1.82,0,0,0-1.6-1H11.61A1.84,1.84,0,0,0,10,2.24,1.84,1.84,0,0,0,8.31,3.85H6.94a1.8,1.8,0,0,0-1.6,1l-.66,1.4H15.32Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M17.4,7.6H2.6a.7.7,0,0,0-.7.7v1a.7.7,0,0,0,.48.66l1.08.49v4.93a2.4,2.4,0,0,0,2.4,2.41h8.27a2.41,2.41,0,0,0,2.41-2.41V10.42l1.08-.49a.7.7,0,0,0,.48-.66v-1A.71.71,0,0,0,17.4,7.6Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
        </SvgIcon>
    )
}

PanIcon.propTypes = {
    primarycolor: PropTypes.string
}

export default PanIcon
