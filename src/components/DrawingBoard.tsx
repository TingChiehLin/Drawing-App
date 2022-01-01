import React, {useRef, useEffect, useState} from 'react';

interface Props {
    color: string,
}

const DrawingBoard = ({color}: Props) => {
    console.log("DrawingBoard:", color)
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const contextRef = useRef<CanvasRenderingContext2D | null>(null)
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas: HTMLCanvasElement = canvasRef.current!; //as HTMLCanvasElement
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        const context: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;
        context.lineCap = "round"
        context.strokeStyle = "black"
        context.lineWidth = 3
        contextRef.current = context
    }, []);

    const startDrawing = (event: React.MouseEvent) => {
        const {clientX, clientY} = event;
        contextRef.current?.beginPath()
        contextRef.current?.moveTo(clientX *2, clientY *2)
        setIsDrawing(true)
    }

    const drawing = (event: React.MouseEvent) => {
        if (!isDrawing) return
        const {clientX, clientY} = event
        contextRef.current?.lineTo(clientX *2, clientY*2)
        contextRef.current?.stroke()
    }

    const finishDrawing = () => {
        contextRef.current?.closePath()
        setIsDrawing(false)
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
