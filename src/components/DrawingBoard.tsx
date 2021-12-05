import React, {useRef, useEffect} from 'react';

// {canvasElement}: Canvas
// interface Canvas {
//     canvasElement:HTMLCanvasElement,
// }

const DrawingBoard = () => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const contextRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        return () => {
            const canvas: HTMLCanvasElement  = canvasRef.current as HTMLCanvasElement;
            canvas.width = window.innerWidth *2;
            canvas.height = window.innerHeight *2;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            const context:CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;
            context.lineCap = "round"
            context.strokeStyle = "black"
            context.lineWidth = 3
            // contextRef.current = context;
        };
    }, []);

    const startDrawing = () => {
        // contextRef.current.beginPath();
    }

    const drawing = () => {

    }

    const finishDrawing = () => {

    }

    return (
        <canvas
            className="w-full h-full bg-gray-200"
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={drawing}
            ref={canvasRef}
        >

        </canvas>
    );
};

export default DrawingBoard;
