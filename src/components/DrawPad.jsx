import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const DrawPad = () => {
    const navigate = useNavigate();
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState(null);
    const [prevX, setPrevX] = useState(null);
    const [prevY, setPrevY] = useState(null);
    const [draw, setDraw] = useState(false);
    const [selectedColor, setSelectedColor] = useState('#FFD600');
    const [clearTimeoutId, setClearTimeoutId] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const context = canvas.getContext('2d');
        context.lineWidth = 2;
        setCtx(context);
    }, []);
    const handleColorChange = (clr) => {
        setSelectedColor(clr.target.value)
        if (ctx) {
            ctx.strokeStyle = clr.target.value;
        }
    };
    const handleClearCanvas = () => {
        if (ctx) {
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
    };

    const handleSaveImage = () => {
        if (ctx) {
            const dataUrl = canvasRef.current.toDataURL('img/png');
            const a = document.createElement('a');
            a.href = dataUrl;
            a.download = 'sketch.png';
            a.click();
        }
    };

    const handleMouseDown = () => {
        setDraw(true);
        if (clearTimeoutId) {
            clearTimeout(clearTimeoutId);
        }
    };
    const handleMouseUp = () => {
        setDraw(false);
        const timeoutId = setTimeout(() => {
            handleClearCanvas();
        }, 3000);

        setClearTimeoutId(timeoutId);
    };
    const handleMouseMove = (e) => {
        if (!ctx || !draw) {
            return;
        }
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
        setPrevX(mouseX);
        setPrevY(mouseY);
    };
    const goBackHandle = () => {
        navigate("/");
    }

    return (
        <>
            <canvas
                ref={canvasRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            />

            <div className='canvas-div'>
                {/* Color selection buttons */}

                <div>
                    <input
                        className='color-input'
                        type="color"
                        value={selectedColor}
                        onChange={handleColorChange}
                    />
                </div>
                {/* Add more color buttons as needed */}

                {/* Clear canvas button */}
                <div>
                    <button className='canvas-btn' onClick={handleClearCanvas}>Clear</button>
                </div>
                {/* Save image button */}
                <div>
                    <button className='canvas-btn' onClick={handleSaveImage}>Save</button>
                </div>
                <div>
                    <button className='canvas-btn' onClick={goBackHandle}>back</button>
                </div>

            </div>
        </>
    );
};

export default DrawPad;
