import React from 'react';
import Sidebar from "../Components/Sidebar";
import CreateInfo from "../Components/CreateInfo";
import Container from "../Components/Container";

function CreatePage(props) {
    return (
        <Container sidebar={<Sidebar/>} content={<CreateInfo/>}/>
    );
}

export default CreatePage;