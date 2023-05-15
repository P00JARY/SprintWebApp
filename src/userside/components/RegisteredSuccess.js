import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function RegisteredSuccess(props) {
    const [open, setOpen] = useState(false)
    let history = useHistory();
    const submit = () => {
        history.push('/user/KyCpage')
    }


    return (
        <div className='card-body p-2 p-lg-5 text-black text-center align-content-center'>
            <h3 className='text-color'>Successfully Registered</h3>
            <p className='text-color'>Continue with KYC verification and MCA E-Sign</p>
            <div className='d-flex justify-content-center'>
                <div className='py-2 px-5  mt-2  color-btn '
                    onClick={() => {
                        submit()
                    }}
                >CONTINUE
                </div>
            </div>
            <div className='text-color fs-5 mt-2 ' style={{ cursor: "pointer" }}>SKIP FOR NOW</div>

            <div className={'infoPage py-3'} onMouseEnter={() => { setOpen(!open) }} onMouseLeave={() => { setOpen(!open) }}>
                <div className='text-color  ' > WHY IS THIS NEEDED?</div>

                {open ? <p style={{ cursor: "pointer" }}>Sprint being a SEBI Registered Angel Fund requires KYC  Verification.MCA is the Master Contribution Agreement that governs
                    all your collective investments made through Sprint </p> : null}

            </div>

        </div>

    );
}

export default RegisteredSuccess;