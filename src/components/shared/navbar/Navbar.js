import React, { Component } from 'react'
import NavbarHeader from './NavbarHeader';
import NavbarIcons from './NavbarIcons';
import NavbarLinks from './NavbarLinks';
import { FaCartArrowDown } from 'react-icons/fa';


class Navbar extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }
  render() {
    return (
      <nav id="nav-wrapper">
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <div className="d-flex">
          <NavbarLinks navbarOpen={this.state.navbarOpen} />
          <FaCartArrowDown className='cart-icon snipcart-checkout' />
        </div>
        <NavbarIcons />
      </nav>
    )
  }
}

export default Navbar;