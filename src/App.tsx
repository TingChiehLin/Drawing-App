import React from 'react';
import {useDispatch} from "react-redux";

import Header from "./layout/Header";
import ColorSelector from "./components/ColorSelector";
import DrawingBoard from "./components/DrawingBoard";

import {colorActions} from "./store";

const Reset = () => {
    return (
        <div className="flex justify-center items-center mb-6">
            <button
                className="rounded-full py-3 px-6 bg-green-300"
                onClick={
                    () => console.log("Rest")
                    //Reset black color
                    //and clean all of color
                    // const canvas = document.getElementById('canvas');
                    // const ctx = canvas.getContext('2d');
                    // ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
            >
                Reset
            </button>
        </div>
    )
}

function App() {

    const dispatch = useDispatch();

    const changeBlueHandle = () => dispatch(colorActions.changeBlue())
    const changeYellowHandle = () => dispatch(colorActions.changeYellow())
    const changePurpleHandle = () => dispatch(colorActions.changePurple())

    return (
        <div>
            <Header title={"Drawing App"}/>
            <div className="h-32 w-full flex justify-center items-center gap-4">
                <ColorSelector color={"blue"} changeColorHandle={changeBlueHandle}/>
                <ColorSelector color={"yellow"} changeColorHandle={changeYellowHandle}/>
                <ColorSelector color={"purple"} changeColorHandle={changePurpleHandle}/>
            </div>
            {Reset()}
            <DrawingBoard/>
        </div>
    );
}

export default App;
