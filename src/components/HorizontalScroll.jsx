import React, { useRef } from 'react';
import './App.css'; // Your CSS file with the styles provided earlier

const HorizontalScroll = () => {
    const containerRef = useRef(null);

    const handleWheel = (e) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += e.deltaY;
            e.preventDefault();
        }
    };

    return (
        <div
            className="horizontal-scroll-container"
            ref={containerRef}
            onWheel={handleWheel}
        >
            <div className="horizontal-scroll-content">
                {/* Your content goes here */}
                <div className="section">Section 1</div>
                <div className="section">Section 2</div>
                <div className="section">Section 3</div>
                {/* Add more sections as needed */}
            </div>
        </div>
    );
};

export default HorizontalScroll;
