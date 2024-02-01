import React from "react";
import './spinner.css';

function Spinner()
{
    return(
        <div className="flex flex-col gap-3 justify-center items-center relative top-[200px]">
            <div className="spinner"></div>
            <p className=" text-white font-bold text-xl">Loading</p>
        </div>
    )
}

export default Spinner;