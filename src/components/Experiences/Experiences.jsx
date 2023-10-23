import React from 'react'
import { List, Panel, PanelGroup } from 'rsuite'
import './Experiences.css'
import coda from '../images/coda.jpg'
import amazon from '../images/amazon.jpg'

function Experiences() {

    let coda_desc = [
        'Implemented image improvements throughout the product, including image borders and image editing menus',
        'Created test documents for images that were embedded, linked, created from packs, and more',
        'Communicated with different teams throughout the company while deciding how to alter images'
        ]

    let amazon_desc = [
        'Implemented Chrome extension to collect network data',
        'Wrote design documents for the extension, including class diagrams and user diagrams'
    ]

    let ia_desc = [
        'Taught class of 15 students in Data Structures and Algorithms course in C++',
        'Graded coding lab homework, held office hours to assist students with projects',
        'Created written exam questions'
    ]

  return (
    <div>
    <div className="bgimage">
        <div className="exp">
        <div className="hello">Experiences!</div>

            <PanelGroup className='p-group' accordion bordered>
                    <Panel header="Coda" defaultExpanded>
                        <div className='exp-panel'>
                            <img src={coda} className="exp-img" alt="My fellow interns and I posing next to Coda\'s company symbol"/>
                            <div className='exp-desc'>
                                <h2 className='exp-header'>Software Development Intern, CODA INC.</h2>

                                <p>
                                    <i>June 2022 - August 2022</i><br /><br />
                                    During this 12 week internship, I worked on a front-end web design project, where I added feature updates to the core product. I gained industry experience while constantly communicating with team leaders, designers, and team members.
                                </p>
                                <List size="sm">
                                    {coda_desc.map((item, index) => (
                                        <List.Item className='list-item' key={index} index={index}>{item}</List.Item>
                                        ))}
                                </List>
                                <div className='skills'>
                                    React.JS, Typescript, Less, HTML
                                </div>

                            </div>
                        </div>
                        
                    </Panel>
                    <Panel header="University of Michigan, IA">
                        <div className='exp-panel'>
                            <div className='exp-desc' style={{maxWidth: '50%'}}>
                                <h2 className='exp-header'>Instructional Aide, Data Structures and Algorithms</h2>
                                <p><i>August 2021 - December 2021</i><br /><br /></p>
                                <List size="sm">
                                    {ia_desc.map((item, index) => (
                                        <List.Item className='list-item' key={index} index={index}>{item}</List.Item>
                                        ))}
                                </List>
                                <div className='skills'>
                                    C++
                                </div>
                                
                            </div>
                        </div>
                    </Panel>
                    <Panel header="Amazon">
                        <div className='exp-panel'>
                        <img src={amazon} className='exp-img' alt="My fellow interns and I posing in a plane ride over Seattle, Washington."/>
                        
                            <div className='exp-desc'>
                                <h2 className='exp-header'>Software Development Intern, AMAZON</h2>
                                <p>
                                <i>June 2021 - August 2021</i><br /><br />
                                During this 12 week internship, I worked on a frontend project creating a Chrome Extension to collect specific data. This was my first time working outside of school projects, and I learned a lot about the flow of communication within a company, and working on a team with professionals.
                                </p>
                                <List size="sm">
                                    {amazon_desc.map((item, index) => (
                                        <List.Item className='list-item' key={index} index={index}>{item}</List.Item>
                                        ))}
                                </List>
                                <div className='skills'>
                                    Javascript, HTML, CSS
                                </div>
                            </div>
                            </div>
                    </Panel>
                    
                </PanelGroup>
            </div>
        
        </div>
    </div>
  )
}

export default Experiences;