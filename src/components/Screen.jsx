import React from 'react'
import Page from './Page'
import SideNav from './SideNav'
import trianglearrow from "../utils/icons/triange-arrow.svg"
// import CustomShape from './CustomShape'

const Screen = () => {

    return (
        <>
            <SideNav />
            <div className="main-container">

                <Page title={"We build fun experiences using cutting edge technologies"} color={"gray"} icon={""} trianglearrow={""} />

                <Page title={"About us"} para={"We understand the importance of communication, a good and healthy communication build a better relationship. We've experience of working with startups & unicorns alike. "} icon={"https://bit.ly/41a2Er1"} bgColor={"#464646"} textColor={"#ffffff"} trianglearrow={trianglearrow} />

                <Page title={"Services"} para={"UIBIX is specialized in UI/UX, Development, Brand strategies web design, marketing and more."} icon={"https://bit.ly/4a7PizW"} bgColor={"#7407e1"} textColor={"#ffffff"} trianglearrow={trianglearrow} />

                {/* <CustomShape/> */}
                <div id="scroll-btn"> Scroll &#10095; </div>
            </div>
        </>
    )
}

export default Screen