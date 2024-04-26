import React from 'react'

const Gallery = () => {
  return (
    <div id="gallery" className='max-w-[1140px] m-auto w-full px-04 py-16'>Gallery
    <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
    <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm-col-span-3 col-span-2 row-span-2'>
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1590602391165-edb096edb9de?q=80&w=1030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/"></img>
        </div>
        <div>
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/"></img>
        </div>
        <div>
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1532236395709-7d70320fec2d?q=80&w=1202&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/"></img>
        </div>
        <div>
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1617859047452-8510bcf207fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/"></img>
        </div>
        <div>
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/"></img>
        </div>
    </div>
    </div>
  )
}

export default Gallery