import React from 'react'
import s from './Footer.module.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className={s.footer}>
        <Link to='/' className={s.footItem}>Home</Link>
        <Link to='/aboutme' className={s.footItem}>About Me</Link>
        <Link to='/' className={s.footItem}>Projects</Link>
        <Link to='/experience' className={s.footItem}>Experience</Link>
      </div>
    </div>
  )
}

export default Footer;