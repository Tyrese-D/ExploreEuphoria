import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src ="https://images.unsplash.com/photo-1614505241498-80a3ec936595?q=80&w=2111&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="/"
        className='w-full h-full object-cover'
        />
        <div className='max-w-[1148px] m-auto '>
            <div className='absolute top-[40%] w-full md:-[50%] max-w[600px] h-full flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'> Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 italic'> Dream Journeys</h2>
                <p>
                    Spend A WeekAway from what your dealing and have a dream vactaion!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero