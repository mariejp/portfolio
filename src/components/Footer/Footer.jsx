import React from 'react'
import s from './Footer.module.css'
import {Nav, Navbar } from 'rsuite'
import HomeIcon from '@rsuite/icons/legacy/Home'

function Footer() {
  return (
    <div>
      
      <div className={s.footer}>
      <Navbar>
          <Nav>
            <Nav.Item href='/' icon={<HomeIcon />}>Home</Nav.Item>
            <Nav.Item href='/aboutme'>About Me</Nav.Item>
            <Nav.Item href='/projects'>Projects</Nav.Item>
            <Nav.Item href='/experience'>Experience</Nav.Item>
          </Nav>
      </Navbar>
      </div>
    </div>
  )
}

export default Footer;