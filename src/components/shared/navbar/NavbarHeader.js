import React, { Component } from "react";
import { Link } from 'gatsby';
import logoWebp from "../../../images/logo.webp";
import logopng from "../../../images/logo.png";
import { FaAlignRight } from 'react-icons/fa';

class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props;
    return (
      <div id="header-wrapper">
        <Link to="">
          <picture>
            <source srcSet={logoWebp} type="image/webp" />
            <source srcSet={logopng} type="image/png" />
            <img src={logopng} alt="company name" />
          </picture>
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