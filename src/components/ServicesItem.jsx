import React from 'react'

function ServicesItem({ IconName, header }) {
    return (
        <div className='flex flex-col  font-roboto border border-green-dark rounded-md p-8  text-green-dark' >
            <div className='flex flex-row items-center  '>
                {/* Icon */}
                <i className={`hover:bg-yellow-light  ${IconName}`}></i>

                {/* Header */}
                <div className='font-bold pl-6 flex-wrap ' >
                    {header}
                </div>
            </div>
            {/* Describtion */}
            <div className='font-cuba text-green-dark bottom-0 ' >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, similique.
            </div>
        </div>
    )
}

export default ServicesItem