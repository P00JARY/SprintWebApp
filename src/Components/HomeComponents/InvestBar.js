import React from 'react';

function InvestBar(props) {
    return (
        <div className=' h-16 gap-52 items-center px-5 grid grid-cols-2 mt-8'>
            <div className='h-full'>
                <input className='border-2 border-purple-600 text-2xl h-full w-full rounded-2xl px-4' type='text' placeholder='Companies Funds Search'/>
            </div>
            <div className=' h-full flex space-x-20  items-center  '>
                <div className=' bg-white border-2 border-black rounded-2xl px-4 text-xl py-2 '>FILTER</div>
                <div className=' bg-blue-950 text-white border-2 border-black rounded-2xl px-4 text-xl  py-2'>Export CSV</div>
                <div className=' bg-blue-950 text-white border-2 border-black rounded-2xl px-4 text-xl  py-2'>Add Investment</div>
            </div>
        </div>
    );
}

export default InvestBar;