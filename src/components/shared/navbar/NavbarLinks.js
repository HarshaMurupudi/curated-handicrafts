import React, { Component } from "react";
import { Link } from 'gatsby';

class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: '/',
        name: 'home'
      },
      {
        id: 1,
        path: '/blog/',
        name: 'blog'
      }
    ]
  }
  render() {
    let open = this.props.navbarOpen;
    console.log(open);
    return (
      <ul
        id="link-wrapper"
        className={open ? 'link-wrapper-open' : 'link-wrapper-close'}
      >
        {
          this.state.links.map((item) => {
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default NavbarLinks;