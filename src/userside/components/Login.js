import React from 'react';
import Layout from "./layout/Layout";
import CreateAccount from "./CreateAccount";

function Login(props) {
    return (
       <Layout>
           <CreateAccount/>
       </Layout>
    );
}

export default Login;