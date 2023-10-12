import React from 'react'
import s from './NavBar.module.css'
import {Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <nav className='navBar' >
            <div className={s.navBar}>
                <Link to='/' className={s.navItem}>Home</Link>
                <Link to='/aboutme' className={s.navItem}>About Me</Link>
                <Link to='/' className={s.navItem}>Projects</Link>
                <Link to='/experience' className={s.navItem}>Experience</Link>
            </div>
        </nav>
    </div>
  )
}

export default NavBar;

