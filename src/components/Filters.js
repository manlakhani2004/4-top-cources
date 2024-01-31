import React from "react";


function Filters(props)
{   
    let setCategory = props.setCategory;
    let category = props.category;

    function handlesetCateogry(title)
    {
        setCategory(title);
        
    }

    const filterdata = props.filterdata;

    return(
        filterdata.map((data)=>{
            return <button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-200
            ${category === data.title ? "bg-opacity-80 border-white":"bg-opacity-40 border-transparent"}
            `} key={data.id} onClick={()=> handlesetCateogry(data.title)} > {data.title} </button>
        })
    );
}



export default Filters;