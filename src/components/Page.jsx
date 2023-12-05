import React, { useEffect, useState } from 'react'

const Page = ({ title, para, icon, bgColor, textColor }) => {
  const [isImage, setIsImage] = useState(true)
  useEffect(() => {
    if (icon) {
      setIsImage(false)
    } else {
      setIsImage(true)
    }
  }, [icon])
  return (
    <>

      <div className='container flex' style={{ backgroundColor: bgColor }}>
        <div className='content-div'>
          <div className='content'>
            {isImage ? "" : <div><img src={icon} alt="icons" /></div>}
            <h1 style={{ color: textColor }}>{title}&#11208;</h1>
            <h2>{para}</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page