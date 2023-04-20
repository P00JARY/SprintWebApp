import React from 'react';
import Container from "./Container";
import Sidebar from "./Sidebar";

function SuccessRegisteredPage(props) {
    return (
        <Container sidebar={<Sidebar/>} content={<SuccessRegisteredPage/>}/>
    );
}

export default SuccessRegisteredPage;