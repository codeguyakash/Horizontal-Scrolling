import React, { useEffect, useState } from 'react'

const Page = ({ title, para, icon, color }) => {
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
          {isImage ? "" : <img src={icon} alt="icon" width={100} />}
          <h1>{title}</h1>
          <h2>{para}</h2>
        </div>
      </div>
    </>
  )
}

export default Page