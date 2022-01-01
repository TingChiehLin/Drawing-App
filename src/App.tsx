import React from 'react';
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";

import Header from "./layout/Header";
import ColorSelector from "./components/ColorSelector";
import DrawingBoard from "./components/DrawingBoard";

import { colorActions } from "./store";

const Reset = () => {
    return (
        <div className="flex justify-center items-center mb-6">
            <button
                className="rounded-full py-3 px-6 bg-green-300"
                onClick={() => console.log("Rest")}
            >
                Reset
            </button>
        </div>
    )
}

function App() {

    const dispatch = useDispatch();
    const color = useSelector( (state:RootStateOrAny) => state.color.value);
    console.log("Redux Color:,",color)

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
            <DrawingBoard color={color}/>
        </div>
    );
}

export default App;
