import React from 'react';
import { check } from '../assets';

const AllInOne = () => {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-5xl font-bold text-center'>All-In-One Platform</h2>
            <p className='text-2xl py-8 text-gray text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                <div className='flex'>
                    <div>
                        <img className='w-7 mr-4 text-green-600' src={check}  />
                    </div>

                    <div>
                        <h3 className='font-bold text-lg '>Notifications</h3> 
                        <p className='text-lg pt-2 pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>

                </div>
                <div className='flex'>
                    <div>
                        <img className='w-7 mr-4 text-green-600' src={check}  />
                    </div>

                    <div>
                        <h3 className='font-bold text-lg '>Notifications</h3> 
                        <p className='text-lg pt-2 pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>

                </div>
                <div className='flex'>
                    <div>
                        <img className='w-7 mr-4 text-green-600' src={check}  />
                    </div>

                    <div>
                        <h3 className='font-bold text-lg '>Notifications</h3> 
                        <p className='text-lg pt-2 pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>

                </div>
                <div className='flex'>
                    <div>
                        <img className='w-7 mr-4 text-green-600' src={check}  />
                    </div>

                    <div>
                        <h3 className='font-bold text-lg '>Notifications</h3> 
                        <p className='text-lg pt-2 pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>

                </div>
            </div>


        </div>
    </div>
  )
}

export default AllInOne