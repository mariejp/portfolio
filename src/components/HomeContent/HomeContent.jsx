import React from 'react'
import s from './HomeContent.module.css'
import me from '../images/img-1.jpg'

function HomeContent() {
  return (
    <div className={s.bgimage}>
        <div className={s.homeContent}>
            <div className={s.imgcontainer}>
                <img className={s.portrait} src={me} alt='me'/>
            </div>
            <div className={s.hello}>
                    <h2>Marie Phillips</h2>
                </div>
            </div>
    </div>
    
  )
}

export default HomeContent