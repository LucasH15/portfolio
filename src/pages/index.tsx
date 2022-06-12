import * as React from 'react'
import { Typography } from '@mui/material'
import { useIntl } from 'gatsby-plugin-react-intl'

import Layout from '../components/layout'
import Seo from '../components/seo'

const Index: React.FC = () => {
    const intl = useIntl()

    return (
        <Layout>
            <Seo title={intl.formatMessage({ id: 'home' })} />
            <Typography variant="h1" color="primary.dark">
                {intl.formatMessage({ id: 'hello' })}
            </Typography>
        </Layout>
    )
}

export default Index
