import React from 'react'
import './Info.css'
import me from '../images/img-1.jpg'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import Description from './Description'

function SocialMedia(props) {
  return (
    <a className="social" href={props.link}>
      <img src={props.image} alt={props.name + ' logo'} style={{width: '10%', verticalAlign: 'middle'}} /> 
      : mariejp</a>  
  )
}

function Info() {

  let skill_vals = [
    'C++', 'Python', 'Javascript', 'React', 'Vue',
    'Typescript', 'HTML', 'CSS', 'Github', 'SQL'
  ]
  let course_vals = [
    'Data Structures and Alorithms',
    'Discrete Mathematics',
    'Web Systems',
    'UI/UX Design',
    'Software for Accessibility',
    'Intro to Artificial Intelligence'
  ]
  const linkedin_link = 'https://www.linkedin.com/in/mariejp/';
  const github_link = 'https://github.com/mariejp';

  return (
    <div className="bgimage">
      <div className="info">
        
        <div className="left">
          <div className="hello">About Me!</div>
          <div className="description intro">
            <p>I am a recent graduate of Computer Science at the University of Michigan,
              searching for full time Software Engineering roles. I have experience in Web Design and UI,
              but I am open to learning about different focus areas.</p>
          </div>
          <Description item_list={skill_vals} title="Skills" />
          <Description item_list={course_vals} title="Courses"/>
        </div>

        <div className="right">
          <div>
            <img className="portrait" src={me} alt='me'/>
          </div>
          <div className="description">
            <SocialMedia image={linkedin} link={linkedin_link} name='LinkedIn'/>
            <SocialMedia image={github} link={github_link} name='GitHub'/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Info