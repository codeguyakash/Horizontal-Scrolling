import React from 'react'
import hamburger from "../utils/icons/hamburger.svg"
import toggle from "../utils/icons/toggle.svg"
import logo from "../utils/icons/logo.svg"

const SideNav = () => {
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
    </div>
  )
}

export default SideNav