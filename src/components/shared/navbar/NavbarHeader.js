import React, { Component } from "react";
import { Link } from 'gatsby';
import logoImg from "../../../images/logo.webp";
import { FaAlignRight } from 'react-icons/fa';

class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props;
    return (
      <div id="header-wrapper">
        <Link to="">
          <img src={logoImg} alt="company name" />
        </Link>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => { handleNavbar() }}
        />
      </div>
    )
  }
}

export default NavbarHeader;