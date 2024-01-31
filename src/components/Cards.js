import React from "react";
import Card from "./Card";
import { useState } from "react";

function Cards(props) {
    let courses = props.Courses;
    let category = props.category;

    const[likedcourse,setLikeCourse] = useState([]);

    console.log('category is',category);

    function getcourses() {
        if (category == "All") {
            let Allcourses = [];
            Object.values(courses).forEach((course_cate) => {
                course_cate.forEach((course) => {
                    Allcourses.push(course);
                });
            });
            return Allcourses;
        }
        else
        {
           return courses[category];
        }  
    }

    let Allcourses = getcourses();

    return (
        <div className="w-[1200px] mx-auto flex flex-wrap gap-6 ">
            {
                Allcourses.map((course) =>
                    <Card key={course.id} course={course} likedcourse ={likedcourse} setLikeCours ={setLikeCourse} />)
            }
        </div>
    )


}

export default Cards;