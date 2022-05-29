import React from 'react'
import PropTypes from 'prop-types'
import { SvgIcon } from '@mui/material'

import { colors } from '../../Theme'

interface ILinkedInIcon {
    primarycolor?: string
}

function LinkedInIcon({ primarycolor, ...props }: ILinkedInIcon) {
    return (
        <SvgIcon {...props} htmlColor="transparent" viewBox="0 0 20 20">
            <path
                d="M0,1.43A1.45,1.45,0,0,1,1.47,0H18.53A1.45,1.45,0,0,1,20,1.43V18.57A1.45,1.45,0,0,1,18.53,20H1.47A1.45,1.45,0,0,1,0,18.57ZM6.18,16.74v-9h-3v9ZM4.68,6.48a1.57,1.57,0,1,0,0-3.12,1.56,1.56,0,1,0,0,3.12Zm6.13,10.26v-5a2,2,0,0,1,.1-.73,1.65,1.65,0,0,1,1.54-1.1c1.09,0,1.52.83,1.52,2v4.83h3V11.56c0-2.77-1.48-4.06-3.45-4.06A3,3,0,0,0,10.81,9V9h0l0,0V7.71h-3c0,.85,0,9,0,9Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
        </SvgIcon>
    )
}

LinkedInIcon.propTypes = {
    primarycolor: PropTypes.string
}

export default LinkedInIcon
