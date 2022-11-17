import React, { useContext } from 'react'
import './About.css'
import newMe from '../../../image/IMG_20210208_095320_670.jpg'
// import award from '../../../image/award.png'
import { ThemeContext } from '../../../context'
function About() {
    const {darkMode} = useContext(ThemeContext)
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg" style={{backgroundColor: darkMode && 'white'}}></div>
            <div className="a-card">
                <img src={newMe} alt="the boy"  className="a-img"/>
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
              I am a FullStack Javascript developer, with production knowledge and experience of React.js,
              Node.js, React-Native, express.js, React-Native etc. Ever Since I wrote my first HTML code that
              showed up in a browser, I have been hooked and fascinated with web development till today. I am
              passionate about building new and exciting projects. The more challenging, the better.
            </p>
           
            {/* <div className="a-award">
                <img src={award} alt="award" className="a-award-img"/>
                <div className="a-award-text">
                    <h4 className="a-award-title">International Design Award</h4>
                    <p className="award-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum, omnis quaerat laudantium quo quam dolores, sed debitis dolorum voluptate reiciendis
                    </p>
                </div>
            </div> */}
        </div>
    </div>
        
    
  )
}

export default About