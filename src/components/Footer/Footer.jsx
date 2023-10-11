import React from 'react'
import s from './Footer.module.css'

function Footer() {
  return (
    <div>
        <nav >
            <ul className={s.footer}>
                <li to='/aboutme' className={s.footItem}>About Me</li>
                <li to='/' className={s.footItem}>Projects</li>
                <li to='/' className={s.footItem}>Experience</li>
            </ul>
        </nav>
    </div>
  )
}

export default Footer;