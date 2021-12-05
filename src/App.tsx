import React from 'react';
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";

import Header from "./layout/Header";
import ColorSelector from "./components/ColorSelector";
import DrawingBoard from "./components/DrawingBoard";

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
    const color = useSelector( (state:RootStateOrAny) => state.color);

    const changeBlueHandle = () => dispatch({color: 'blue'})


    const changeOrangleHandle = () => dispatch({color: 'orange'})

    const changePurpleHandle = () => dispatch({color: 'purple'})

    return (
        <div>
            <Header title={"Drawing App"}/>
            <div className="h-32 w-full flex justify-center items-center gap-4">
                <ColorSelector color={"blue"} changeColorHandle={changeBlueHandle}/>
                <ColorSelector color={"yellow"} changeColorHandle={changeOrangleHandle}/>
                <ColorSelector color={"purple"} changeColorHandle={changePurpleHandle}/>
            </div>
            {Reset()}
            <DrawingBoard/>
        </div>
    );
}

export default App;
