import React from 'react'
import PropTypes from 'prop-types'
import { SvgIcon } from '@mui/material'

import { colors } from '../../Theme'

interface IPersonalScheduleIcon {
    primarycolor?: string
}

function PersonalScheduleIcon({
    primarycolor,
    ...props
}: IPersonalScheduleIcon) {
    return (
        <SvgIcon {...props} htmlColor="transparent" viewBox="0 0 20 20">
            <path
                d="M9.45,8.13h1.39a.65.65,0,0,0,.65-.65V6.2a.65.65,0,0,0-.65-.66H9.45a.66.66,0,0,0-.65.66V7.48A.66.66,0,0,0,9.45,8.13Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M6,8.13H7.33A.65.65,0,0,0,8,7.48V6.2a.65.65,0,0,0-.65-.66H6a.65.65,0,0,0-.65.66V7.48A.65.65,0,0,0,6,8.13Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M2.44,11.5H3.82a.65.65,0,0,0,.65-.66V9.57a.65.65,0,0,0-.65-.66H2.44a.65.65,0,0,0-.65.66v1.27A.65.65,0,0,0,2.44,11.5Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M2.44,14.87H3.82a.66.66,0,0,0,.65-.66V12.93a.65.65,0,0,0-.65-.65H2.44a.65.65,0,0,0-.65.65v1.28A.66.66,0,0,0,2.44,14.87Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M6,11.5H7.33A.65.65,0,0,0,8,10.84V9.57a.65.65,0,0,0-.65-.66H6a.65.65,0,0,0-.65.66v1.27A.65.65,0,0,0,6,11.5Zm0-1.44a.3.3,0,0,1,.43,0l0,0,.27-.27a.31.31,0,1,1,.44.44l-.49.49a.31.31,0,0,1-.44,0L6,10.5A.31.31,0,0,1,6,10.06Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M6,14.87H7.33A.66.66,0,0,0,8,14.21V12.93a.65.65,0,0,0-.65-.65H6a.65.65,0,0,0-.65.65v1.28A.66.66,0,0,0,6,14.87Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M9.45,14.87h1.39a.66.66,0,0,0,.65-.66V12.93a.65.65,0,0,0-.65-.65H9.45a.66.66,0,0,0-.65.65v1.28A.66.66,0,0,0,9.45,14.87Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M13,8.13h1.38A.65.65,0,0,0,15,7.48V6.2a.65.65,0,0,0-.65-.66H13a.65.65,0,0,0-.65.66V7.48A.65.65,0,0,0,13,8.13Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M9.45,11.5h1.39a.65.65,0,0,0,.65-.66V9.57a.65.65,0,0,0-.65-.66H9.45a.66.66,0,0,0-.65.66v1.27A.66.66,0,0,0,9.45,11.5Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M17.41,15.32h-.73a.83.83,0,0,0,0-.15,2.67,2.67,0,0,0,1.45-1.83h0a1.13,1.13,0,0,0,.77-1.08,1.14,1.14,0,0,0-.39-.86V10c0-.85-.78-1.36-1.77-1.58V2a2,2,0,0,0-1.94-2H2A2,2,0,0,0,0,2V14.7a2,2,0,0,0,2,2h9.49a2.57,2.57,0,0,0-.32,1.24v1.38a.72.72,0,0,0,.72.72h7.45a.71.71,0,0,0,.71-.72V17.9A2.58,2.58,0,0,0,17.41,15.32Zm-5.57,4.06a.09.09,0,0,1-.1-.1v-.45h1v.55Zm1.55-.86V18a.31.31,0,0,0-.31-.31.3.3,0,0,0-.3.31v.19h-1V17.9a2,2,0,0,1,2-2h.38l1.23,1.33v2.14H13.39ZM.62,4.65H16.16V8.36a5.12,5.12,0,0,0-.56,0c-1.47,0-3,.53-3,1.7v1.36l-.06,0a1.18,1.18,0,0,0-.33.81A1.15,1.15,0,0,0,13,13.34a2.65,2.65,0,0,0,1.47,1.83v.15h-.78A2.5,2.5,0,0,0,11.9,16H2A1.33,1.33,0,0,1,.62,14.7ZM2.55,2.33a.66.66,0,1,1,1.32,0,.66.66,0,0,1-1.32,0Zm3.78,0a.54.54,0,0,1,.54-.54h3a.54.54,0,0,1,0,1.08h-3A.54.54,0,0,1,6.33,2.33Zm6.58,0a.66.66,0,1,1,1.32,0,.66.66,0,0,1-1.32,0ZM15.59,14.8a2,2,0,0,1-2-2V11l.72-.59a2.46,2.46,0,0,0,1,.76,12.6,12.6,0,0,0,2.29.39v1.22A2,2,0,0,1,15.59,14.8Zm2.76,3.94h1v.54a.09.09,0,0,1-.09.1h-.94ZM16.12,16l-.41.46h0l-.12.14h0l-.05,0-.6-.65h.21v-.5a2.49,2.49,0,0,0,.83,0h0v.49h.24Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M14.53,11.7a.36.36,0,0,0-.36.36.36.36,0,1,0,.72,0A.36.36,0,0,0,14.53,11.7Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M16.66,11.7a.36.36,0,0,0-.36.36.36.36,0,1,0,.71,0A.36.36,0,0,0,16.66,11.7Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M15.59,13.17a.31.31,0,0,0,.31-.32v-.32a.31.31,0,0,0-.31-.31.31.31,0,0,0-.3.31v.32A.31.31,0,0,0,15.59,13.17Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
            <path
                d="M16.16,13.61a.3.3,0,0,0-.36,0,.3.3,0,0,1-.41,0,.3.3,0,0,0-.43.06.32.32,0,0,0,.06.44.89.89,0,0,0,1.14,0h0a.32.32,0,0,0,.07-.44A.21.21,0,0,0,16.16,13.61Z"
                fill={primarycolor || colors.text.primary}
                strokeOpacity={0}
            />
        </SvgIcon>
    )
}

PersonalScheduleIcon.propTypes = {
    primarycolor: PropTypes.string
}

export default PersonalScheduleIcon
