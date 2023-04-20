import CreatePage from "./Pages/createPage";
import {Route, Routes} from "react-router-dom";
import OTPpage from "./Pages/OTPpage";
import SuccessRegisteredPage from "./Pages/SuccessRegisteredPage";
import KycVerificationPage from "./Pages/KYCVerificationPage";
import Home from "./Pages/Home";



function App() {
  return (
        <>

            <Routes>
                <Route path={'/'} element={<CreatePage/>}/>
                <Route path={'/otp'} element={<OTPpage/>}/>
                <Route path={'/success'} element={<SuccessRegisteredPage/>}/>
                <Route path={'/KYC'} element={<KycVerificationPage/>}/>
                <Route path={'/home'} element={<Home/>}/>
            </Routes>
        </>



  );
}

export default App;
