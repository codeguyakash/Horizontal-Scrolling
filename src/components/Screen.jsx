import React from 'react'
import Page from './Page'
import SideNav from './SideNav'
// import CustomShape from './CustomShape'

const Screen = () => {
    return (
        <>
            <SideNav />
            <div className="main-container">
                <Page title={"We build fun experiences using cutting edge technologies"} icon={""} color={"gray"} />
                <Page title={"About us"} para={"We understand the importance of communication, a good and healthy communication build a better relationship. We've experience of working with startups & unicorns alike. "} icon={""} color={"#464646"} />
                <Page title={"Services"} para={"UIBIX is specialized in UI/UX, Development, Brand strategies web design, marketing and more."} icon={""} color={"#7407e1"} />
                {/* <CustomShape/> */}
            </div>
        </>
    )
}

export default Screen