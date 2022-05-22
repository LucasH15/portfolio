import * as React from 'react'
import { Typography } from '@mui/material'
import { useIntl } from 'gatsby-plugin-react-intl'

import Layout from '../components/layout'
import Seo from '../components/seo'

const Index: React.FC = () => {
    const intl = useIntl()

    return (
        <Layout>
            <Seo title="Accueil" />
            <Typography variant="h1">
                {intl.formatMessage({ id: 'hello' })}
            </Typography>
        </Layout>
    )
}

export default Index
