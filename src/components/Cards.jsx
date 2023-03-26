import React from 'react'
import Card from './Card'

const Cards = (props) => {
     const courses = props.courses;
     // console.log(courses);
     const getCourses = () => {
          let allCourse = [];

          Object.values(courses).forEach(array => {
               array.forEach((courseList) => {
                    allCourse.push(courseList);
               });
          });
          return allCourse;
     }
     return (
          <div className='w-11/12 max-w-[1200px gap-4 mx-auto justify-center my-10 flex flex-wrap'>
               {
                    getCourses().map(listOfcours => {
                         return <Card key={ listOfcours.id} listOfcours={listOfcours} />
                    })
               }
          </div>
     )
}

export default Cards