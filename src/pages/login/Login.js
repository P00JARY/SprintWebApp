import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { authLogin } from "../../utils/api/api";
import Snackbar from '@mui/material/Snackbar';
import style from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [onError,setOnError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    authLogin({ email: email, password: password })
      .then((res) => {

        if(res.status === false){
          setOnError(true)
          return
        }

        localStorage.setItem("token", res.data.jwt);
        history.push("/opportunity");
      })
      .catch((error) => {
        setOnError(true)
        console.log(error);
      });
  };

  return (
    <div className="login-wrapper row mx-0">
      <Snackbar
        open={onError}
        onClose={(e) => {
          setOnError(false)
        }}
        autoHideDuration={6000}
        message="Invalid Credentials"
      ></Snackbar>    
     <div className="bg-primary col-5 m-4 rounded d-flex align-items-center justify-content-center">
        <img src="/logo.png" alt="logo" />
      </div> 
      <div className="col-4 d-flex flex-column p-5 align-items-center justify-content-center">
        <h2 className="w-100 text-start text-primary">Login</h2>
        <form className="w-100" onSubmit={handleSubmit}>
          <div className="mt-4 w-100">
            <TextField
              id="email"
              name="Email"
              label="Email"
              variant="outlined"
              value={email}
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <TextField
              id="password"
              name="Password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              fullWidth
            />
          </div>
          <button className="btn btn-primary w-100 py-2 mt-4" type="submit">Login</button>
        </form>
      </div>     
    </div>
  );
};

export default Login;
