import React from 'react'
import PropTypes from 'prop-types'
import { SvgIcon } from '@mui/material'
import { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon'

import { colors } from '../../Theme'

interface ICodepenIcon extends SvgIconProps {
    primarycolor?: string
}

function CodepenIcon({ primarycolor, ...props }: ICodepenIcon) {
    return (
        <SvgIcon {...props} htmlColor="transparent" viewBox="0 0 20 20">
            <path
                d="M20,6.84v0a.64.64,0,0,0,0-.07s0,0,0-.05,0,0,0-.06,0,0,0,0l0-.06,0,0-.06-.09,0,0,0,0-.05,0,0,0h0L10.47.14a.86.86,0,0,0-1,0L.38,6.24h0l0,0,0,0,0,0,0,.05a.35.35,0,0,0-.06.09l0,0,0,0s0,0,0,0l0,.06s0,0,0,0,0,0,0,.07v0A.45.45,0,0,0,0,7v6.1a.45.45,0,0,0,0,.11v0l0,.07v0a.14.14,0,0,1,0,.06s0,0,0,.05l0,.05,0,0a.21.21,0,0,0,0,.06l0,0a.1.1,0,0,0,0,.05l0,0,0,0,0,0h0l9.13,6.09A.83.83,0,0,0,10,20a.87.87,0,0,0,.48-.15l9.13-6.09h0l0,0,0,0,0,0a.1.1,0,0,0,0-.05l0,0,0-.06,0,0,0-.05s0,0,0-.05l0-.06v0s0,0,0-.07v0a.45.45,0,0,0,0-.11V7a.45.45,0,0,1,0-.11ZM10.86,2.46,17.59,7l-3,2L10.86,6.47v-4Zm-1.72,0v4L5.41,9l-3-2L9.14,2.46ZM1.72,8.56,3.87,10,1.72,11.43V8.56Zm7.42,9L2.41,13l3-2,3.73,2.49v4ZM10,12,7,10l3-2,3,2Zm.86,5.5v-4L14.58,11l3,2-6.73,4.49Zm7.42-6.1L16.13,10l2.15-1.43Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
        </SvgIcon>
    )
}

CodepenIcon.propTypes = {
    primarycolor: PropTypes.string
}

export default CodepenIcon
