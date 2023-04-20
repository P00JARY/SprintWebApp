import React from 'react';
import {useNavigate} from "react-router-dom";

function CreateInfo(props) {

    const navigate=useNavigate()

    return (
        <div className='flex items-center justify-center '>
            <div className='  w-full px-10 space-y-5 '>
                <label className='text-4xl font-bold text-purple-700'>Create an account</label>
                <div className='space-y-5'>
                    <input className='p-2 h-16  w-10/12 border-2 border-purple-800 rounded-xl' type='text' placeholder='First Name'/>
                    <input className='p-2 h-16  w-10/12 border-2 border-purple-800 rounded-xl' type='text' placeholder='Last Name'/>
                    <input className='p-2 h-16  w-10/12 border-2 border-purple-800 rounded-xl' type='text' placeholder='mobile'/>
                    <input className='p-2 h-16 w-10/12 border-2 border-purple-800 rounded-xl' type='text' placeholder='E-Mail ID'/>
                    <div>
                        <button className='bg-gradient-to-br from-yellow-400 to-red-600   p-5 rounded-2xl text-white   w-6/12 hover:transform hover:text-2xl hover:bg-gradient-to-bl'
                                onClick={()=>{
                                    navigate('/otp')
                                }}

                        >CONTINUE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateInfo;