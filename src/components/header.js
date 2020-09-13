import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"
import { Helmet } from "react-helmet"

const Header = ({ siteTitle }) => (
  <header className="container">
    <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
