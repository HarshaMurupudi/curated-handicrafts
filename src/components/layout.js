import React from "react"
import PropTypes from "prop-types"
import './bootstrap.min.css';
// import "./layout.css";
import '../sass/layout.scss';
import Navbar from '../components/shared/navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
