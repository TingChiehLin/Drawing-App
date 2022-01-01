import React from 'react';

type Props = {
    color: string,
    changeColorHandle: () => void
}

const ColorSelector = ({color, changeColorHandle}: Props) => {
    return (
        <button
            className={`bg-${color}-500 rounded-full h-24 w-24`}
            onClick={() => {
                changeColorHandle()
            }}
        >
        </button>
    );
};

export default ColorSelector;
