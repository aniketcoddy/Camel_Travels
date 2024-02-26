import React from 'react'
import { useLocation } from 'react-router-dom'

const BlogsDetails = () => {
const location = useLocation();
console.log(location , "uselocaion")
const {id, image, title, author, date, description} = location.state  

 
  return (
    <div className='min-h-[550px] pt-20'>
      <div className='h-[300px] overflow-hidden'>
        <img src={image} alt="tajmahal" className='mx-auto h-[300px] w-full object-cover transition-all duration-700 hover:scale-100'/>
      </div>
      <div className='container pb-14'>
        
        <p className='text-slate-600 text-sm py-3'> {" "} Written By {author} on {date}</p>
       <h1 className='text-2xl font-semibold mb-10'>{title}</h1>
       <h1 className='text-sm ' >{description}</h1>
      </div>
    </div>
  )
}

export default BlogsDetails
