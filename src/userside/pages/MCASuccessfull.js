import React from 'react';
import LayoutKYC from "../components/layout/LayoutKYC";

function McaSuccessfull(props) {
    

    return (
        <LayoutKYC>
            <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                <h1 className='text-color'>MCA Successfully Signed  </h1>
                <div className='color-btn px-4 py-2'
                onClick={()=>{
                }}
                >CONTINUE</div>
                <p className='px-5 text-center mt-3'> Trustee and Investment  Manager signatures pending . You will be notified once the document is ready for download.</p>
            </div>
        </LayoutKYC>
    );
}

export default McaSuccessfull;
