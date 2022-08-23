import React from "react";
import {Navbar, Dropdown, Avatar} from "flowbite-react";

const Header = () => {
  return <Navbar
    fluid={true}
    rounded={true}
    className="bg-red-800"
  >
    <Navbar.Brand href="https://flowbite.com/">
      <img
        src="/logo.jpg"
        className="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse>
      <Navbar.Link
        href="/navbars"
        active={true}
      >
        Home
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        About
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Services
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Pricing
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Contact
      </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
};

export default Header;
