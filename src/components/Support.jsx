import React from 'react';
import supportImg from '../assets/supportImg.jpg'
import phone from '../assets/phone.svg'
import arrowRight from '../assets/arrowRight.svg'



const Support = () => {
  return (
    <div className='w-full mt-24'>

      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay ' src={supportImg} alt="/" />
      </div>

      <div className='max-w-[1240px] mx-auto  text-white relative'>
        
        <div className='px-4 py-12'>
            <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
            <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
            <p className='py-4 text-3xl text-slate-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        
        <div className='grid grid-col-1 lg:grid-cols-3 relative gap-x-8 gap-y-16  px-4 pt-12 sm:pt-20 text-black'>
          <div className='bg-white rounded-xl shadow-2xl '>
            <div className='p-8'>
              <img className='fill-white w-16 p-4 bg-indigo-600 rounded-lg mt-[-4rem]' src={phone} />
              <h3 className='font-bold text-2xl my-6'>Sales</h3>
              <p className='text-gray-600 text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>Contact Us <img className='w-5 ml-2' src={arrowRight} /></p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-2xl '>
            <div className='p-8'>
              <img className='w-16 p-4 bg-indigo-600 color-white rounded-lg mt-[-4rem]' src={phone} />
              <h3 className='font-bold text-2xl my-6'>Sales</h3>
              <p className='text-gray-600 text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>Contact Us <img className='w-5 ml-2' src={arrowRight} /></p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-2xl '>
            <div className='p-8'>
              <img className='w-16 p-4 bg-indigo-600 color-white rounded-lg mt-[-4rem]' src={phone} />
              <h3 className='font-bold text-2xl my-6'>Sales</h3>
              <p className='text-gray-600 text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>Contact Us <img className='w-5 ml-2' src={arrowRight} /></p>
            </div>
          </div>
 
        </div>
      </div>






    </div>
  )
}

export default Support