import React from 'react';
import {useNavigate} from "react-router-dom";

function KycVerificationPage(props) {
    const navigate=useNavigate()

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className='  w-8/12 h-4/5 rounded-3xl overflow-hidden p-5 bg-white'>

                <div className='text-5xl font-bold font-style: italic  text-transparent bg-gradient-to-r from-purple-700 to-red-600 bg-clip-text'>SPRINT</div>

                <div className='flex justify-center mt-52  '>
                   <div className=' w-2/5 space-y-6'>
                       <p className='text-center text-purple-600 font-bold text-3xl'>KYC Verification</p>

                       <input className='border-2 border-purple-600 rounded-xl w-full h-14 font-bold px-4'
                       placeholder='Full Name'
                       />
                       <input className='border-2 border-purple-600 rounded-xl w-full h-14 font-bold px-4'
                              placeholder='Pan Number'
                       />
                       <input className='border-2 border-purple-600 rounded-xl w-full h-14 font-bold px-4'
                              placeholder='Date Of Birth - DD/MM/YYYY'
                       />
                       <div className='flex justify-center pt-10'>
                           <button className=' bg-green-600 p-5 text-2xl font-bold rounded-br-3xl rounded-tl-3xl text-white  hover:transform hover:text-3xl  '
                                   onClick={()=>{
                                       navigate('/home')
                                   }}
                           >VERIFY</button>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    );
}

export default KycVerificationPage;