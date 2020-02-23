import React, { Component } from "react";
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: 'https://wwww.facebook.com'
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: 'https://wwww.twitter.com'
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: 'https://wwww.instagram.com'
      },
    ]
  }
  render() {
    return (
      <div id="icon-wrapper" className="mr-5">
        {
          this.state.icons.map((item) => {
            return (
              <a
                href={item.path}
                key={item.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })
        }
      </div>
    )
  }
}

export default NavbarIcons;