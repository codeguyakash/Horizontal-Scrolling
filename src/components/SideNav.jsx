import React from 'react'
import hamburger from "../utils/icons/hamburger.svg"
import toggle from "../utils/icons/toggle.svg"
import logo from "../utils/icons/logo.svg"
import draw from "../utils/icons/pencil.png"
import { useNavigate } from "react-router-dom";
const SideNav = () => {
  const navigate = useNavigate();
  const goToDraw = () => {
    navigate("/drawingpad")
  }

  return (
    <div className='nav sidenav nav-flex'>
      <div className="logo">
        <div className='logo-title'>uibix</div>
        <img src={logo} alt="logo-icon" className='icon' width={80} />
      </div>
      <div>
        <img src={hamburger} alt="ham-icon" className='icons' />
      </div>
      <div className="toggle-div">
        <img src={toggle} alt="toggle-icon" className='icons' />
      </div>
      <div className="toggle-div" onClick={goToDraw}>
        <img src={draw} alt="toggle-icon" className='draw-icon' />
      </div>
    </div>
  )
}

export default SideNav