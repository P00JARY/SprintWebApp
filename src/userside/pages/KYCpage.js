import React, { useState } from 'react';
import LayoutKyc from "../components/layout/LayoutKYC";
import { useHistory } from "react-router-dom";
import { verifyPan } from "../apis/apis"

function KyCpage(props) {
    let history = useHistory();


    // const [name, setName] = useState("");
    // const [panNumber, setPanNumber] = useState("");
    // const [date, setDate] = useState("");
    const [errorData, seterrorData] = useState("");
    const [data, setdata] = useState({
        panNo: "",
        fullName: "",
        dateOfBirth: ""
    });

    const handle = (e) => {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setdata(newdata)
    }


    const submit = () => {
        console.log(data)
        if (data.panNo.length === 0 || data.dateOfBirth.length === 0 || data.fullName.length === 0) {
            seterrorData("Enter the credentials !")
            throw new Error('Enter the credentials ')
        } else {
            console.log("pan data ", data);
            verifyPan(data).then((res) => {
                console.log(res);
            }).catch((err) => { console.log(err); })

            history.push('/user/KycConfirmation', { name: data.fullName, panNumber: data.panNo, date: data.dateOfBirth })
        }


    }


    return (
        <LayoutKyc>
            <div className='d-flex flex-column  justify-content-center align-items-center h-100  '>
                <h1 className='text-color '>KYC Verification</h1>
                <input type='text' id='panNo' className=' item item-primary rounded-2   p-2 mx-md-2 my-2  fs-5' placeholder='Full Name' onClick={() => { seterrorData("") }} onChange={(e) => {
                    handle(e)
                }} />
                <input type='text' id='fullName' className='item item-primary rounded-2  p-2 mx-md-2 my-2  fs-5' placeholder='PAN Number' onClick={() => { seterrorData("") }} onChange={(e) => {
                    handle(e)
                }} />
                <input type='date' id='dateOfBirth' className='item item-primary rounded-2  py-2 px-6 mx-md-2 my-2  fs-5' onClick={() => { seterrorData("") }} onChange={(e) => {
                    handle(e)
                }} />
                <span style={{ color: "red" }}>{errorData}</span>
                <button className='item green-btn :hover w-auto px-5 py-2 text-white'
                    onClick={
                        () => {
                            submit()
                        }}
                >VERIFY</button>
            </div>
        </LayoutKyc>
    );
}
export default KyCpage;