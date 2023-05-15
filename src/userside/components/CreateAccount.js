import React, { useState } from 'react'
import { apiRegister } from "../apis/apis";
import { useHistory } from "react-router-dom";


export default function CreateAccount() {

    let history = useHistory();
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        mobileNumber: "",
        email: "",
    })
    const [dataError, setDataError] = useState({
        firstname: "",
        lastname: "",
        mobileNumber: "",
        email: "",
    })
    const handle = (e) => {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }


    const submit = () => {
        if (data.firstname.length === 0) {
            setDataError((prevState) => {
                return { ...prevState, firstname: "firstname can not be empty" }
            })
        } else {
            setDataError((prevState) => {
                return { ...prevState, firstname: "" }
            })
        }
        if (data.lastname.length === 0) {
            setDataError((prevState) => {
                return { ...prevState, lastname: "Lastname can not be empty" }
            })
        } else {
            setDataError((prevState) => {
                return { ...prevState, lastname: "" }
            })
        }

        if (data.mobileNumber.length === 0) {
            setDataError((prevState) => {
                return { ...prevState, mobileNumber: "mobile can not empty" }
            })
        } else {
            setDataError((prevState) => {
                return { ...prevState, mobileNumber: "" }
            })
        }

        if (data.email.length === 0) {
            setDataError((prevState) => {
                return { ...prevState, email: "Email can not empty" }
            })
        } else {
            setDataError((prevState) => {
                return { ...prevState, email: "" }
            })
        }


        if ("" !== data.firstname && "" !== data.lastname && "" !== data.mobile && "" !== data.email) {

            console.log("api reqst sent ", data);
            localStorage.setItem("firstname", data.firstname)
            localStorage.setItem("lastname", data.lastname)
            localStorage.setItem("email", data.email)
            localStorage.setItem("mobileNumber", data.mobileNumber)

            apiRegister({ mobileNumber: data["mobileNumber"] }).then((data) => {
                console.log(data);
                if (data.status) {
                    history.push('/user/otp',)
                }
            }).catch(err => console.log(err))

        }

    }
    return (
        <div className="card-body p-2 p-lg-5 text-black">
            <div className="d-flex align-items-center mb-3 pb-1">
                <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }} />
                <span className="h2 fw-bold mb-0 text-color ">Create an Account </span>
            </div>

            <div className="form-outline mb-4">
                <input type="text" className="form-control form-control-lg" placeholder='First Name'
                    onChange={(e) => { handle(e) }}
                    value={data.firstname}
                    id='firstname'
                />
                <span>{dataError.firstname}</span>
            </div>
            <div className="form-outline mb-4">
                <input type="text" className="form-control form-control-lg" placeholder='Last Name'
                    onChange={(e) => { handle(e) }}
                    value={data.lastname}
                    id='lastname' />
                <span>{dataError.lastname}</span>
            </div>
            <div className="form-outline mb-4">
                <input type="text" className="form-control form-control-lg" placeholder='Mobile'
                    onChange={(e) => { handle(e) }}
                    value={data.mobileNumber}
                    id='mobileNumber' />
                <span>{dataError.mobileNumber}</span>
            </div>
            <div className="form-outline mb-4">
                <input type="text" className="form-control form-control-lg" placeholder='Email-ID'
                    onChange={(e) => { handle(e) }}
                    value={data.email}
                    id='email'
                />
                <span>{dataError.email}</span>
            </div>
            <div className="pt-1 mb-4">
                <button className=' color-btn p-2 text-white mt-2 w-50 text-center '
                    onClick={
                        () => {
                            submit()
                        }}
                >CONTINUE</button>
            </div>
        </div>
    )
}
