import React from 'react'
// import '../CSS/sidebar.css'

export default function Sidebar() {
    return (
        <div className='  px-4  '>
            <img className='mt-3' src={'/logo2.svg'} alt={'logo'} />
            <div className='text-content'>
                <div className='text1 mt-3 text-white'>Start your</div>
                <div className='text1 mt-0 text-white' >Journey with us</div>
                <div className='mt-4 '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</div>
                <p className=' mt-3 d-md-flex d-none '>
                    graece pertinacia no usu natoque nonumy euismod prodesset purus recteque vix pro suscipit tempus detraxit habitant appareat sollicitudin mediocritatem imperdiet
                </p>
            </div>
            <div className=' img-box d-md-flex  d-none  align-items-center p-4 '>
                <img className='profile-pic' src='https://randomuser.me/api/portraits/men/75.jpg' alt='myPic' />
                <div className='font-monospace px-4'>Suresh Kumar</div>
            </div>
        </div>

    )
}
