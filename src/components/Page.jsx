import React, { useEffect, useState } from 'react'


const Page = ({ title, para, icon, bgColor, textColor, trianglearrow }) => {
  const [isImage, setIsImage] = useState(true)
    useEffect(() => {
    if (icon && trianglearrow) {
      setIsImage(false)
    } else {
      setIsImage(true)
    }
  }, [icon,trianglearrow])
  return (
    <>

      <div className='container flex' style={{ backgroundColor: bgColor }}>
        <div className='content-div'>
          <div className='content'>
            <div>
              <h1 style={{ color: "red" }}> <span>{isImage ? "" : <img src={icon} alt="icons" className='p-icons' />}</span> {title} <span>{isImage ? "" : <img src={trianglearrow} alt="" />}</span></h1>
            </div>
            <h2>{para}</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page