import React from 'react';
import Sidebar from "../Components/Sidebar";
import Container from "../Components/Container";
import OTPinfo from "../Components/OTPinfo";

function OTPpage(props) {
    return (
        <Container sidebar={<Sidebar/>} content={<OTPinfo/>}/>
    );
}



export default OTPpage;