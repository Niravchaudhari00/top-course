import React from 'react'
// import { filterData } from '../data'

const Filter = (props) => {
     const filterData = props.filterData;
     const category = props.category;
     const setCategory = props.setCategory;

     // filter by category wise
     const filterHandler = (title) => {
          setCategory(title);
     }
     
     return (
          <div>
               <div className="flex flex-wrap gap-2 justify-center mt-5">
                    {
                         filterData.map((filterData) => {
                              return <button
                                   onClick={() => filterHandler(filterData.title)}
                                   className={`text-lg px-2 py-1 rounded-md font-medium 
                                   text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                                   ${category === filterData.title ? "bg-opacity-60 border-2 border-white" : "bg-opacity-40 border-transparent"}`}
                                   key={filterData.id}
                              >{filterData.title}</button>
                         })
                    }
               </div>
          </div>
     )
}

export default Filter