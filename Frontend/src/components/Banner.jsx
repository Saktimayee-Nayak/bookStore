import React from 'react'
import banner from "../../public/Banner.png";

const Banner = () => {
  return (
    <>
       <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 '>
        <div className='order-2 md:order-1 w-full wd-1/2 md:mt-32 mt-12' >
         <div className='space-y-12'>
         <h1 className='text-4xl font-bold'>
            Hello, welcome here to learn something <span className='text-pink-500'>new everyday!!!</span>
            </h1>
            <p className='text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Voluptatem animi consequuntur assumenda aperiam sequi ad fuga soluta.
                Rerum corrupti beatae perferendis numquam nulla laboriosam quae. Quas nemo iste ipsam! Qui.</p>

                <label className="input input-bordered flex items-center gap-2">
          
            <input type="text" className="grow" placeholder=" Enter your Email login" />
         </label>
         </div>
         <button className=" mt-6 btn btn-secondary">Secondary</button>
        </div>
        <div className=' order-1 w-full wd-1/2'>
        <img src={banner} className='w-92 h-92' alt=''/>
        </div>
       </div>
    </>
  )
}

export default Banner
