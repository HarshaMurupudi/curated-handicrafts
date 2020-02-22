import React, { Component } from 'react'
import NavbarHeader from './NavbarHeader';
import NavbarIcons from './NavbarIcons';
import NavbarLinks from './NavbarLinks';

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
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
        <NavbarIcons />
      </nav>
    )
  }
}

export default Navbar;