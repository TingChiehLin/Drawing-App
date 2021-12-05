import React, {useState} from 'react';

type Props = {
    color:string,
    changeColorHandle: () => void
}

const ColorSelector = ({color, changeColorHandle}:Props) => {
    // const [currentColor, setcurrentColor] = useState<string | null>("black")

    return (
        <button
            className={`bg-${color}-500 rounded-full h-24 w-24`}
            onClick={changeColorHandle}
        >
        </button>
    );
};

export default ColorSelector;
