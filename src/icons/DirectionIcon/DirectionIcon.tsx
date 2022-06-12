import React from 'react'
import PropTypes from 'prop-types'
import { SvgIcon } from '@mui/material'
import { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon'

import { colors } from '../../Theme'

interface IDirectionIcon extends SvgIconProps {
    primarycolor?: string
}

function DirectionIcon({ primarycolor, ...props }: IDirectionIcon) {
    return (
        <SvgIcon {...props} htmlColor="transparent" viewBox="0 0 20 20">
            <path
                d="M17.85,4.9,16.36,3a.74.74,0,0,0-.65-.29l-4.55.38V2.5A1.09,1.09,0,0,0,9,2.5v.74l-2.44.2a.74.74,0,0,0-.69.74V6.57a.74.74,0,0,0,.69.73L9,7.5V9L4.28,8.67A.74.74,0,0,0,3.63,9L2.16,10.89a.72.72,0,0,0,0,.9l1.48,1.94a.75.75,0,0,0,.59.29h.06L9,13.63v2.79H6.64a1.08,1.08,0,1,0,0,2.16h6.88a1.08,1.08,0,1,0,0-2.16H11.16v-3l2.3-.2a.73.73,0,0,0,.68-.73V10.13a.73.73,0,0,0-.68-.74l-2.29-.18V7.67L15.72,8h.06a.75.75,0,0,0,.59-.29L17.85,5.8A.75.75,0,0,0,17.85,4.9Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
        </SvgIcon>
    )
}

DirectionIcon.propTypes = {
    primarycolor: PropTypes.string
}

export default DirectionIcon
