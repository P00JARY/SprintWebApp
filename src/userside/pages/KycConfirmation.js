import React from 'react';
import LayoutKyc from "../components/layout/LayoutKYC";
import { useHistory, useLocation } from "react-router-dom";
import DoneIcon from '@mui/icons-material/Done';

function KycConfirmation() {
    const history = useHistory();
    const location = useLocation();

    const handleVerification = () => {
        history.push('/user/AgreementPage');
    };

    const { name, panNumber, date } = location.state;
    const newDate = new Date(date);
    const finalDate = newDate.toDateString().split(' ');

    return (
        <LayoutKyc>
            <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                <h1 className='text-color'>KYC Verification Confirmation</h1>
                <div className='userdiv text-orange'>{name}</div>
                <div className='userdiv text-orange'>{panNumber}</div>
                <div className='userdiv text-orange'>{finalDate[1] + " " + finalDate[2] + ", " + finalDate[3]}</div>
                <div className='userdiv done-tick'>
                    <DoneIcon className='text-white bg-green' style={{ borderRadius: '100%' }} />
                    <span className='text-green'>KYC Verified</span>
                </div>
                <button className='item green-btn :hover w-auto px-5 py-2 text-white' onClick={handleVerification}>VERIFY</button>
            </div>
        </LayoutKyc>
    );
}

export default KycConfirmation;
