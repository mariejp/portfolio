import React from 'react'
import { PanelGroup, Panel, List, Button} from 'rsuite'
import './Projects.css'

function Projects() {

    let texttalk = [
        'Description: The application was created as a communication alternative for users with speech and/or hearing disabilities. During the call, audio input can be converted to text messages, or text input can be converted to audio.',
        'Implemented the CallManager to create calls through internet connections.',
        'Co-wrote various design documents including Class Diagrams, Function Diagrams, Design Reviews',
        'Implemented bug fixes including improving the help menu, back buttons, and ReadMe markdown file'
    ]

    let insta485 = [
        'Insta485 was created as a mock version of Instagram. We were able to create a server that allowed multiple users to create profiles, post photos, like posts, comment, and more',
        'Created and configured an AWS EC2 instance and S3 Bucket to contain user data',
        'Designed the HTML templates, REST API and Python programs, working on both the front-end and the back-end',
        'Languages: Javascript, Python, SQL, HTML, Shell, CSS'
    ]


    return (
        <div className="bgimage">
            <div className="projects">
                <div className="hello">Projects!</div>

                <PanelGroup className='p-group' accordion bordered>
                        <Panel header="TextTalk" defaultExpanded>
                        <div className='exp-desc' style={{maxWidth: '75%'}} >

                                <p>
                                    <i>January 2023 - April 2023</i><br /><br />
                                    
                                </p>
                                <List size="sm">
                                    {texttalk.map((item, index) => (
                                        <List.Item className='list-item' key={index} index={index}>{item}</List.Item>
                                        ))}
                                </List>
                                <div className='skills'>
                                    Swift, Python, Ruby
                                </div>

                            </div>
                        </Panel>
                        <Panel header="Insta485" defaultExpanded>
                        <div className='exp-desc' style={{maxWidth: '75%'}} >

                                <p>
                                    <i>January 2022 - May 2022</i><br /><br />
                                    
                                </p>
                                <List size="sm">
                                    {insta485.map((item, index) => (
                                        <List.Item className='list-item' key={index} index={index}>{item}</List.Item>
                                        ))}
                                </List>
                                <div className='skills'>
                                    Javascript, Python, SQL, HTML, Shell, CSS
                                </div>

                            </div>
                        </Panel>
                        <Panel header="Portfolio" defaultExpanded>
                        <div className='exp-desc' style={{maxWidth: '75%'}} >

                                <p>
                                    Check out the <Button href='https://github.com/mariejp/portfolio' color='green' appearance="ghost">repository</Button> for this website!  
                                </p>
                                
                                <div className='skills'>
                                    Javascript, SQL, HTML, CSS
                                </div>

                            </div>
                        </Panel>
                </PanelGroup>
            </div>
        </div>
                        
  )
}

export default Projects