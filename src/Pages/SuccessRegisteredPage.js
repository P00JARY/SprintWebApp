import React from 'react';
import Container from "../Components/Container";
import Sidebar from "../Components/Sidebar";
import SuccessMsg from "../Components/SuccessMsg";

function SuccessRegisteredPage(props) {
    return (
        <Container sidebar={<Sidebar/>} content={<SuccessMsg/>}/>
    );
}

export default SuccessRegisteredPage;