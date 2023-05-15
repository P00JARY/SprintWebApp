import React from 'react';
import LayoutKyc from "../components/layout/LayoutKYC";
import { useHistory } from "react-router-dom";

function AgreementPage(props) {


    const history = useHistory()

    return (

        <LayoutKyc>

            <div className='d-flex  flex-column justify-content-center align-items-center h-100'>
                <div className='text-purple    fs-6 flex-column text-center '>
                    <p>We're excited to offer you the convenience of signing documents electronically .</p>
                    <p>To get started , we need a little bit of information from you .</p>
                </div>
                <h1 className='text-color fs-1 text-center '>Master Contribution Agreement </h1>
                <div className='text-center'>ultricies sanctus quam ceteros malorum curae mucius odio et ea nobis </div>
                <div className='text-center'>autem ligula interpretaris eripuit at quisque causae ea inceptos</div>
                <div className='color-btn py-2 px-5 mt-3'

                    onClick={() => {
                        history.push('/user/AgreementInfo')
                    }}

                >CONTINUE</div>

            </div>
        </LayoutKyc>
    );
}

export default AgreementPage;