import React, { useEffect, useState } from 'react'

const Page = ({ title, para, icon, color, textColor }) => {
  let icons = false;
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

      <div className='container flex' style={{ backgroundColor: color }}>
        <div className='content-div'>
          <div className='content'>
            {isImage ? "" : <img src={icons} alt="" />}
            <h1 style={{ color: textColor }}>{title}</h1>
            <h2>{para}</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page