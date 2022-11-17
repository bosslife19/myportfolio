import React, { useContext } from 'react'
import './Toggle.css'
import Sun from '../../image/sun.png'
import Moon from '../../image/moon.png'
import { ThemeContext } from '../../context'

function Toggle() {
    const {dispatch, darkMode} = useContext(ThemeContext)
    const handleClick = () => {
        dispatch({type: 'TOGGLE'})
    }
    
  return (
    <div className="toggle">
        <img src={Sun} alt="" className="t-icon" />
        <img src={Moon} alt="" className="t-icon" />
        <div className="t-button" onClick={handleClick}
        style={{left: darkMode? 0: 25 }}></div>
    </div>
  )
}

export default Toggle