import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

interface IHeader {
  siteTitle?: string
}

const Header = ({ siteTitle }: IHeader) => (
  <header>
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
