import React from 'react';

type Props = {
    title: String
}

const Header = ({title = "Hello"}: Props) => {
    return (
        <div className="h-16 w-full bg-blue-500 flex justify-center items-center">
            <h1 className="text-lg font-bold text-white">{title}</h1>
        </div>
    );
};

export default Header;
