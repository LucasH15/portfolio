import React from 'react'
import PropTypes from 'prop-types'
import { SvgIcon } from '@mui/material'

import { colors } from '../../Theme'
import { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon'

interface IHeadphoneSupportIcon extends SvgIconProps {
    primarycolor?: string
}

function HeadphoneSupportIcon({ primarycolor, ...props }: IHeadphoneSupportIcon) {
    return (
        <SvgIcon {...props} htmlColor="transparent" viewBox="0 0 20 20">
            <path
                d="M16.39,8.73V8.55a6.48,6.48,0,0,0-13,0v.24a2.51,2.51,0,0,0-1.58,2.32v1.26a2.5,2.5,0,0,0,2.5,2.5H5a1.25,1.25,0,0,0,1.26-1.25V9.86A1.25,1.25,0,0,0,5,8.61H4.79V8.55A5.12,5.12,0,1,1,15,8.55v.06h0a1.25,1.25,0,0,0-1.26,1.25v3.76a1.24,1.24,0,0,0,.94,1.2l-.18.37a.8.8,0,0,1-.72.45H11.46a1.6,1.6,0,0,0-3.06.68,1.61,1.61,0,0,0,3.06.68H13.8a2.17,2.17,0,0,0,1.95-1.23l.46-1a2.51,2.51,0,0,0,1.94-2.43V11.11A2.51,2.51,0,0,0,16.39,8.73Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M7.36,7.19a.66.66,0,0,0-.64.67.68.68,0,1,0,.64-.67Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M9.91,8.54a.69.69,0,0,0,.68-.68.67.67,0,0,0-.68-.67.66.66,0,0,0-.68.67A.67.67,0,0,0,9.91,8.54Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M12.42,8.54a.68.68,0,1,0-.68-.68A.68.68,0,0,0,12.42,8.54Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
        </SvgIcon>
    )
}

HeadphoneSupportIcon.propTypes = {
    primarycolor: PropTypes.string
}

export default HeadphoneSupportIcon
