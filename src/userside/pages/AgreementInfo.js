import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LayoutKyc from "../components/layout/LayoutKYC";
import CForm from "../components/CForm";
import { createEsign, postContributionForm } from "../apis/apis";
import { digioCreate } from "../components/DigioUtils/digioCreate";
import "../sass/AgreementInfo.scss";

function AgreementInfo(props) {
    const history = useHistory();
    const [childData, setChildData] = useState();
    const [submitted, setSubmitted] = useState(false);

    const handleChildData = (data) => {
        setChildData(data);
        console.log("From child", data);

    };

    const inputString = `#h Master Contribution Agreement #he
    #p SCIFund SCA, SICAV / FIS #pe
    #p
    I, #i_full_name , having its registered office in #i_location , and registered with the Register of Commerce, pleased to announce our intention to invest the amount of #i_amount for shares (the Shares) in the company to be named Black Tie Fund Poland SCA, SICAV / FIS (the Fund), of which we received the investor presentation dated #i_date (the Investor Presentation). #pe #br4`;

    return (
        <LayoutKyc>
            <div className="p-sm-5">
                <CForm inputString={inputString} onChildData={handleChildData} />
            </div>
        </LayoutKyc>
    );
}

export default AgreementInfo;
