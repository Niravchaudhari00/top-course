import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { toast } from 'react-toastify';
const Card = (props) => {

     const courseList = props.listOfcours;

     const [readmore, setReadmore] = useState(false)
     const description = readmore ? courseList.description : `${courseList.description.substring(0, 150)}...`;

     const readmoreHandler = () => {
          setReadmore(!readmore);
     }

     // likehandler
     const like = props.like;
     const setLike = props.setLike;
     const likehandler = () => {
          if (like.includes(courseList.id)) {
               // in array available
               setLike((prev) => prev.filter((cid) => (cid !== courseList.id)));
               toast.warning("Unliked")
          } else {

               if (like.length === 0) {
                    setLike([courseList.id]);
               } else {
                    setLike((prev) => [...prev, courseList.id])
               }
               toast.success("liked")

          }

     }
     return (
          <div className='w-96 bg-slate-800 rounded-md relative'>
               <div>
                    <img
                         src={courseList.image.url}
                         alt={courseList.image.alt}
                         width={400}
                         loading="lazy"
                         className='rounded-t-md'

                    />
               </div>
               <div className='likebtn absolute top-[11.3rem] right-2 bg-slate-100 p-3 w-[50px] h-[50px] flex justify-center rounded-full '>
                    <button onClick={likehandler}>
                         {
                              like.includes(courseList.id) ? <FcLike size={30} /> : <FcLikePlaceholder size={30} />
                         }
                    </button>
               </div>
               <div
                    className='px-2'>
                    <p className='text-slate-50 font-bold text-2xl mt-3'>{courseList.title}</p>
                    <p className='text-slate-50 my-2'>{description}
                         <span
                              className='text-blue-600 cursor-pointer'
                              onClick={readmoreHandler} >
                              {readmore ? "Show less" : "Read more"}
                         </span>
                    </p>
               </div>
          </div>
     )
}

export default Card