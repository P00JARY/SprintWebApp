import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";


function SuccessMsg(props) {
    const navigate=useNavigate()

    const [isShow,setShow]=useState(false)

    const eventHandler=event=>{
        setShow(current=>!current)
    }



    return (
        <div className='flex items-center justify-center '>
            <div className='grid grid-cols-1'>
                <div>
                    <div className='  w-full px-10 space-y-5 '>
                        <p className='text-4xl font-bold text-purple-700 text-center'>Successfully Registered </p>
                        <p className='text-center text-purple-700'>Continue with KYC verification and MCA E-sign</p>
                        <div className='flex justify-center'>
                            <button className='bg-gradient-to-r from-red-600 to-yellow-300 p-5 text-white font-bold
                    rounded-br-2xl
                    rounded-tl-2xl
                    w-2/5
                   hover:text-xl'
                                    onClick={()=>{
                                        navigate('/KYC')
                                    }}
                            >CONTINUE</button>
                        </div>
                        <p className='text-center text-2xl text-purple-700 cursor-pointer pt-10'>SKIP FOR NOW</p>
                        <div className=' flex justify-center  cursor-pointer rounded-full '
                             onClick={eventHandler}
                        >
                            <p className=' text-2xl  p-5 bg-purple-600 text-white hover:bg-amber-400 hover:text-black  rounded-full  ' >WHY IS THIS NEEDED ?</p>
                        </div>

                    </div>
                    <div className='flex justify-center items-center'>

                        {
                            isShow &&(

                           <span className='text-center pt-10  w-8/12 '>Sprint being a SEBI Registered Angel Fund requires KYC
                               Verification . MCA is the Master Contribution Agreement that governs all your collective investments made through sprint </span>

                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SuccessMsg;