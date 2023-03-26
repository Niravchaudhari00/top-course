import React from 'react'
import "./Spinner.css"

const Spinner = () => {
     return (
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%]'>
               <div className='spinner bg-slate-50'></div>
          </div>
     )
}

export default Spinner