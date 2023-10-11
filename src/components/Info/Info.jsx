import React from 'react'
import s from './Info.module.css'
import me from '../images/img-1.jpg'
import linkedin from '../images/linkedin.png'

function Info() {
  return (
    <div className={s.bgimage}>
      <div className={s.info}>
        <div className={s.left}>
          <div className={s.hello}>About Me!</div>
          <div className={s.description}>
            <p>I am a recent graduate of Computer Science at the University of Michigan,
              searching for full time Software Engineering roles. I have experience in Web Design and UI,
              but I am open to learning about different focus areas.</p>
          </div>
          <div className={s.header}>Skills</div>
          <div className={s.description}>
            <ul>
              <li>C++</li>
              <li>Typescript</li>
              <li>Python</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.imgcontainer}>
            <img className={s.portrait} src={me} alt='me'/>
          </div>
          <div className={s.description}>
            <a className={s.social} href='https://www.linkedin.com/in/mariejp/'>
              <img src={linkedin} alt='linkedin logo' style={{width: '10%', display: 'inline'}} /> : mariejp</a>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Info