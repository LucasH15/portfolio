import * as React from 'react'
import { Typography } from '@mui/material'

import Layout from '../components/layout'
import Seo from '../components/seo'

const Index: React.FC = () => (
    <Layout>
        <Seo title="Accueil" />
        <Typography variant="h1">Hello</Typography>
    </Layout>
)

export default Index
