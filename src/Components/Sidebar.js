import React from 'react';

function Sidebar(props) {
    return (
        <div className='bg-gradient-to-br from-green-400 to-purple-600   rounded-3xl '>
            <div className='px-10 space-y-10 mt-5'>
                <div className='text-6xl font-bold font-style: italic  text-transparent bg-gradient-to-r from-purple-700 to-red-600 bg-clip-text'>SPRINT</div>
                <div className='text-5xl text-white font-bold '>
                    <p>Start your </p>journey with us.
                </div>
                <p className='text-white text-2xl font-thin'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                </p>
            </div>
            <div className='mx-5 mt-20 backdrop-blur-sm bg-white/30  p-5 rounded-2xl '>
                <p className='text-white text-xl '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </p>
                <div className='flex mt-10'>
                    <img className='rounded-full' src='https://randomuser.me/api/portraits/men/75.jpg' alt='my Pic'/>
                    <div className='text-white text-2xl flex items-center justify-center px-4'>Gladson Bosh</div>
                </div>
            </div>

        </div>
    );
}

export default Sidebar;