import React, { useRef } from 'react';
import Page from './Page'
import SideNav from './SideNav'
import trianglearrow from "../utils/icons/triange-arrow.svg"
import cards from "../utils/icons/card-index-dividers.png"
import gears from "../utils/icons/gear_2699-fe0f 2.png"
// import CustomShape from './CustomShape'

const Screen = () => {
    const containerRef = useRef(null);

    const handleWheel = (e) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += e.deltaY * 4;
        }
    };


    return (
        <>
            <SideNav />
            <div className="main-container" ref={containerRef}
                onWheel={handleWheel}>
                <Page title={"We build fun experiences using cutting edge technologies"} color={"gray"} icon={""} trianglearrow={""} />
                <Page title={"About us"} para={"We understand the importance of communication, a good and healthy communication build a better relationship. We've experience of working with startups & unicorns alike. "} icon={cards} bgColor={"#464646"} textColor={"#ffffff"} trianglearrow={trianglearrow} />
                <Page title={"Services"} para={"UIBIX is specialized in UI/UX, Development, Brand strategies web design, marketing and more."} icon={gears} bgColor={"#7407e1"} textColor={"#ffffff"} trianglearrow={trianglearrow} />
                {/* <CustomShape/> */}
                <div id="scroll-btn"> Scroll &#10095; </div>
                <div>
                    {/* <DrawingApp /> */}
                </div>
            </div>
        </>
    )
}

export default Screen