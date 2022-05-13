// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { Typography } from "@mui/material"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Index: React.FC = () => (
  <Layout>
    <Seo title="Using TypeScript" />
    <Typography variant="h1">
      Gatsby supports <b>TypeScript by default</b>
    </Typography>
  </Layout>
)

export default Index
