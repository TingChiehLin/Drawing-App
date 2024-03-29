import React, {useRef, useEffect, useState} from 'react';
import {RootStateOrAny, useSelector,} from "react-redux";

const DrawingBoard = () => {

    const color = useSelector((state:RootStateOrAny) => state.color.value);
    const time = useSelector((state:RootStateOrAny)=> state.reset.value)

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const contextRef = useRef<CanvasRenderingContext2D | null>(null)
    const [isDrawing, setIsDrawing] = useState(false);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const canvas: HTMLCanvasElement = canvasRef.current!; //as HTMLCanvasElement
        canvas.width = window.innerWidth * 2
        canvas.height = window.innerHeight * 2
        canvas.style.width = `${window.innerWidth}px`
        canvas.style.height = `${window.innerHeight}px`

        const clientRect = canvas.getBoundingClientRect()
        setOffsetX(clientRect.left)
        setOffsetY(clientRect.top)

        const context: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;
        context.lineCap = "round"
        context.strokeStyle = color
        context.lineWidth = 10
        contextRef.current = context
    }, [time]);

    useEffect(() => {
        if (contextRef.current) {
            contextRef.current.strokeStyle = color
        }
    }, [color]);


    const startDrawing = (event: React.MouseEvent) => {
        const {clientX, clientY} = event;
        contextRef.current?.beginPath()
        contextRef.current?.moveTo((clientX - offsetX) *2, ((clientY - offsetY) * 2))
        setIsDrawing(true)
    }

    const drawing = (event: React.MouseEvent) => {
        if (!isDrawing) return
        const {clientX, clientY} = event
        contextRef.current?.lineTo((clientX - offsetX) *2, ((clientY - offsetY) * 2))
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
