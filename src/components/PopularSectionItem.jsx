import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

function PopularSectionItem({ image }) {
    const [rating, setRating] = useState(0);

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate);
        // other logic
    };

    // Optional callback functions
    const onPointerEnter = () => console.log('Enter');
    const onPointerLeave = () => console.log('Leave');
    const onPointerMove = (value, index) => console.log(value, index);

    return (
        <div className='flex flex-col items-center relative group bg-green-dark rounded-md px-20 py-16'>
            <div className='flex absolute -top-40'>
                <img src={image} className='group-hover:animate-up-down' alt='Plant' />
            </div>
            <div className='flex flex-col mt-20'>
                <h3 className='italic'>Nephrolepis exaltata</h3>
                <h1 className='text-2xl'>Boston Fern</h1>
                <div className='flex flex-row'>
                    {/* <Rating
                        onClick={handleRating}
                        onPointerEnter={onPointerEnter}
                        onPointerLeave={onPointerLeave}
                        onPointerMove={onPointerMove}
                        /> */}
                </div>

                <div className='flex justify-between items-center mt-4'>
                    <h1 className='text-xl'>$5</h1>
                    <i className="flex p-2 items-center justify-center bg-yellow-light fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
    );
}

export default PopularSectionItem;
