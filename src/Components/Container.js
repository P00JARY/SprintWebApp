import React from 'react';

function Container(props) {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className='  w-8/12 h-4/5 rounded-3xl overflow-hidden p-5 bg-white'>
                <div className=' grid grid-cols-2  h-full rounded-3xl '>
                    {props.sidebar}
                    {props.content}
                </div>
            </div>
        </div>
    );
}

export default Container;