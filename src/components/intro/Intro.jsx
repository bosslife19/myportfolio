import React from 'react'
import './intro.css'
import Me from '../../image/Newme-removebg-preview.png'

function Intro() {
  return (
    <div className="intro">
        <div className="introLeft">
            <div className="introLeftWrapper">
                <h2 className='i-intro'>Hello, My name is </h2>
                <h1 className='i-name'>Woko David</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">SEO-Expert</div>
                        <div className="i-title-item">Mobile-App-Developer</div>
                        <div className="i-title-item">Content Creator</div>
                        <div className="i-title-item">UI/UX Designer</div>
                    </div>
                </div>
                <p className="i-desc">
                   I develop end-to-end fullstack web and mobile applications for fun, employers
                   or clients. I am available for freelance or permanent web development jobs.
                </p>
            </div>
            
        </div>
        <div className="introRight">
            <div className="i-bg"></div>
            <img src={Me} alt="My face" className='i-img' />
        </div>
        {/* <svg width="45" height="45" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
            {/* <rect width="48" height="48" fill="white" fill-opacity="0.01"/> */}
            {/* <rect x="4" y="4" width="40" height="16" rx="8" fill="none" stroke="black" stroke-width="1" stroke-linejoin="round" className="i-scroll"/> */}
            {/* <rect x="4" y="28" width="40" height="16" rx="8" fill="none" stroke="#333" stroke-width="1" stroke-linejoin="round"/> */}
            {/* <path d="M36 14C37.1046 14 38 13.1046 38 12C38 10.8954 37.1046 10 36 10C34.8954 10 34 10.8954 34 12C34 13.1046 34.8954 14 36 14Z" fill="none" stroke="#333" stroke-width="1" stroke-linejoin="round"/> */}
            {/* <path d="M12 38C13.1046 38 14 37.1046 14 36C14 34.8954 13.1046 34 12 34C10.8954 34 10 34.8954 10 36C10 37.1046 10.8954 38 12 38Z" fill="none" stroke="#333" stroke-width="1" stroke-linejoin="round"/> */}
            {/* </svg> */}
    </div>
  )
}

export default Intro
