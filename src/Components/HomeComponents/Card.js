import React from 'react';

function Card(props) {
    return (
        <div className=' flex justify-center items-center   bg-blue-200 w-7/12 rounded-3xl overflow-hidden  '>
            <div className='text-center space-y-4 text-blue-800'>
                <div className='font-bold text-2xl'>{props.title}</div>
                <div className='font-bold text-4xl'>{props.price}</div>
                <div className='font-bold'>{props.realized}</div>
            </div>
        </div>
    );
}

export default Card;