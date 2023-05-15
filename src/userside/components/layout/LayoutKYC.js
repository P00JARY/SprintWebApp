import React from 'react';

function LayoutKyc({ children }) {
    return (
        <div className='kyc-container'>
            <div className=' kyc-body  h-100  bg-white '>
                <img className=' m-3 ' src={'/logo2.svg'} alt={'logo'} />
                {children}
            </div>
        </div>
    );
}

export default LayoutKyc;