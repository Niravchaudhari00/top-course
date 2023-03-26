import React from 'react'
import { useState } from 'react';
import Card from './Card'

const Cards = (props) => {
     const courses = props.courses;
     const category = props.category;
     const [like, setLike] = useState([]);
     // console.log(like);

     const getCourses = () => {
          if (category === "All") {
               let allCourse = [];

               Object.values(courses).forEach(array => {
                    array.forEach((courseList) => {
                         allCourse.push(courseList);
                    });
               });
               return allCourse;
          } else {
               return courses[category];
          }

     }
     return (
          <div className='w-11/12 max-w-[1200px gap-4 mx-auto justify-center my-10 flex flex-wrap'>
               {
                    getCourses().map(listOfcours => {
                         return <Card
                              key={listOfcours.id}
                              listOfcours={listOfcours}
                              like={like}
                              setLike={setLike}
                         />
                    })
               }
          </div>
     )
}

export default Cards