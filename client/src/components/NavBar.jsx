import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components';


const NavBar = (props) => (
    <Navbar color="dark">
      <Navbar.Brand>
        <Navbar.Item renderAs="div" href="#">
            <Navbar.Item href="/">{props.title}</Navbar.Item>
        </Navbar.Item>
        <Navbar.Burger/>
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container>
          <Navbar.Item href="/about">About</Navbar.Item>
        </Navbar.Container>
        <Navbar.Container position="end">
          <Navbar.Item href="#">At the end</Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
)

export default NavBar;
