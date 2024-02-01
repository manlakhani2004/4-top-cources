import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card(props)
{
const course = props.course;
const [likebtn,setLike] = useState(<FcLikePlaceholder></FcLikePlaceholder>);

let likedcourse = props.likedcourse;
let setLikeCours = props.setLikeCours;

function clickhandler()
{
    if(!likedcourse.includes(course.id))
    {
        //not still like
        if(likedcourse.length == 0)
        {
            setLikeCours([course.id]);
            console.log(likedcourse);
            setLike(<FcLike></FcLike>);
        }
        else
        {
            setLikeCours((prev)=>[...prev,course.id]);
            setLike(<FcLike></FcLike>);
        }
        toast.success("Liked Successfully");

        console.log("liked");
    }
    else
    {
        //already liked
        setLikeCours((prev)=> prev.filter(((cid)=> cid != course.id)));
        toast.warning("Like Removed");
        setLike(<FcLikePlaceholder></FcLikePlaceholder>)
        console.log("unliked");
        console.log(likedcourse);
    }
}

return(
    <div className="w-[380px] bg-slate-700 text-white flex items-end  flex-col  rounded-lg mb-2">
        <div>
            <img  className="rounded-lg" src={course.image.url} alt={course.image.alt}></img>  
        </div>
        <div>
        <button onClick={clickhandler} className=" text-3xl mr-2 relative bottom-5 rounded-full p-2 bg-white" >{likebtn}</button>
        </div>
        <div className="px-4 pb-4">
            <h2 className=" text-xl font-bold pb-3  ">{course.title}</h2>
            <p className=" font-semibold">{(course.description.length > 100)?`${course.description.substring(0,100)}....`:course.description}</p>
        </div>
    </div>
)
}


export default Card;