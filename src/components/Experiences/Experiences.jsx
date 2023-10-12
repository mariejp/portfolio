import React from 'react'
import { Panel, PanelGroup } from 'rsuite'
import './Experiences.css'
import coda from '../images/coda.jpg'
import amazon from '../images/amazon.jpg'

function Experiences() {

  return (
    <div>
    <div className="bgimage">
        <div className="exp">
        <div className="hello">Experiences!</div>

            <PanelGroup className='p-group' accordion bordered>
                    <Panel header="Coda" defaultExpanded>
                        <div className='exp-panel'>
                            <img src={coda} alt="My fellow interns and I posing next to Coda\'s company symbol"/>
                            <div className='exp-desc'>
                                <h2 className='exp-header'>Software Development Intern, CODA INC.</h2>
                                <p>
                                    During this 12 week internship, I worked on a front-end web design project, where I added feature updates to the core product. I gained industry experience while constantly communicating with team leaders, designers, and team members.
                                </p>
                                <div className='skills'>Javascript  Typescript  ReactJS  Less  Figma</div>
                            </div>
                        </div>
                        
                    </Panel>
                    <Panel header="Amazon" style={{fontSize: 'large'}}>
                        <div className='exp-panel'>
                            <div className='exp-desc'>
                                <h2 className='exp-header'>Software Development Intern, AMAZON</h2>
                                <p>
                                During this 12 week internship, I worked on a frontend project creating a Chrome Extension to collect specific data. This was my first time working outside of school projects, and I learned a lot about the flow of communication within a company, and working on a team with professionals.
                                </p>
                                <div className='skills'>HTML  Javascript  ReactJS  Github</div>
                            </div>
                            <img src={amazon} alt="My fellow interns and I posing in a plane ride over Seattle, Washington."/>
                        </div>
                    </Panel>
                    <Panel header="Instructional Aide"></Panel>
                </PanelGroup>
            </div>
        
        </div>
    </div>
  )
}

export default Experiences;