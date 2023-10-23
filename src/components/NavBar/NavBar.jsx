import React from 'react'
import {Nav, Navbar} from 'rsuite'
import HomeIcon from '@rsuite/icons/legacy/Home';

function NavBar() {
  return (
    <div>

      <Navbar appearance='subtle'>
          <Nav pullRight>
            <Nav.Item href='/' icon={<HomeIcon />}>Home</Nav.Item>
            <Nav.Item href='/aboutme'>About Me</Nav.Item>
            <Nav.Item href='/projects'>Projects</Nav.Item>
            <Nav.Item href='/experience'>Experience</Nav.Item>
          </Nav>
        </Navbar>

    </div>
  )
}

export default NavBar;

