import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { verifyOtp } from "../apis/apis"

function OtpContent(props) {
    const history = useHistory();

    const [otp, setOtp] = useState(["", "", "", ""]);
    const [otpError, setOtpError] = useState("");

    const transactionToken = localStorage.getItem("transactionToken");
    const firstname = localStorage.getItem("firstname");
    const lastname = localStorage.getItem("lastname");
    const email = localStorage.getItem("email");
    const mobileNumber = localStorage.getItem("mobileNumber")

    const handleOtpChange = (e, index) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);
    };

    const handleSubmit = () => {
        const data = {
            transactionToken,
            otp: otp.join(""),
            firstname,
            lastname,
            email,
        };

        if (otp.some((value) => value === "")) {
            setOtpError("Please enter a valid OTP");
        } else {
            verifyOtp(data)
                .then((response) => {
                    console.log("front end ", response)

                    if (response.status) {
                        localStorage.setItem("JWT", response.data.jwt)
                        console.log("to local", response.data.jwt);
                        history.push('/user/Successfull');
                    } else {
                        setOtpError(response.description);
                    }
                })
                .catch((error) => console.error(error));
        }
    };

    return (
        <div className="card-body p-2 p-lg-5 text-black text-center">
            <h2 className="text-color mb-4">Mobile OTP Verification</h2>
            <p className="text-center">Enter the 4 digit OTP sent on {mobileNumber} to proceed</p>
            <div className="d-flex justify-content-center">
                {otp.map((value, index) => (
                    <input
                        key={index}
                        className="otp-item p-3 mx-md-2 mx-1 text-center fs-5"
                        maxLength={1}
                        onChange={(e) => handleOtpChange(e, index)}
                        value={value}
                    />
                ))}
            </div>
            <span style={{ color: "red" }}>{otpError}</span>
            <div className="d-flex justify-content-center">
                <div className="green-btn :hover p-2 mt-2 w-50" onClick={handleSubmit}>
                    VERIFY
                </div>
            </div>
            <h5 className="text-color mt-4">RESEND OTP</h5>
            <h6 className="mt-4 text-uppercase">Edit Mobile Number</h6>
        </div>
    );
}

export default OtpContent;
