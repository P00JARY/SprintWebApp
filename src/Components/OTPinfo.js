import React from 'react';
import {useNavigate} from "react-router-dom";

function OtPinfo(props) {

    const navigate=useNavigate()
    return (
        <div className='flex items-center justify-center mb-72'>
            <div className='  w-full px-10 space-y-5 '>
                <p className='text-4xl font-bold text-purple-700 text-center'>OTP Verification </p>
                <p className='text-center'> Enter the 4 digit OTP sent to 9876543210 </p>
                <div className='flex space-x-4 justify-center'>
                    <input className='border-2 border-purple-600 w-16 h-16 rounded-xl text-center text-2xl' type='text ' />
                    <input className='border-2 border-purple-600 w-16 h-16 rounded-xl  text-center text-2xl' type='text ' />
                    <input className='border-2 border-purple-600 w-16 h-16 rounded-xl text-center text-2xl' type='text ' />
                    <input className='border-2 border-purple-600 w-16 h-16 rounded-xl text-center text-2xl' type='text ' />
                </div>
                <div className='flex justify-center pt-10'>
                    <button className=' bg-green-600 p-5 text-2xl font-bold rounded-br-3xl rounded-tl-3xl text-white  hover:transform hover:text-3xl  '
                    onClick={()=>{
                            navigate('/success')
                    }}
                    >VERIFY</button>
                </div>
                <p className='text-2xl text-center underline text-purple-700 cursor-pointer pt-8'>Resend OTP</p>
                <p className='text-2xl text-center   cursor-pointer pt-8 hover:text-red-600 '>Edit Mobile Number</p>
            </div>
        </div>
    );
}

export default OtPinfo;