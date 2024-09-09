import React from 'react'

function ReviewSectionItem({ image }) {
    return (
        <div className='flex flex-col items-center bg-green-mid rounded-md p-4 basis-2/5' >
            <h3 className='italic font-cuba flex-wrap '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat incidunt dicta rerum sunt aliquid quasi suscipit obcaecati necessitatibus culpa libero!
            </h3>
            <div className='flex justify-between w-full items-center' >
                <div className='flex items-center mt-1'>
                    <img src={image} className='rounded-full w-14 h-14 bg-contain'  ></img>
                    <div className='flex flex-col p-2' >
                        <h1 className='text-yellow-light text-xl' >JOHN DOE</h1>
                        <h3 className=''>Designer</h3>
                    </div>
                </div>

                <i className="fas fa-quote-left text-white-light text-4xl"></i>
            </div>
        </div>
    )
}

export default ReviewSectionItem