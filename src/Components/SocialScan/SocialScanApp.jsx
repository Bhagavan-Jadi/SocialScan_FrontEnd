import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginComponent from '../Login/LoginComponent';
import ErrorComponent from '../ErrorComponenet';
import SignupComponent from '../Signup/SignupComponent';
import WelcomeComponent from '../WelcomeComponent'

export default function SocialScanApp() {
    return (
        <div className="socialscan">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent />} />
                    <Route path="/login" element={<LoginComponent />} />

                    <Route path="/signup" element={<SignupComponent/>} />

                    <Route path="/welcome/:username" element={<WelcomeComponent/>}/>

                    <Route path="*" element={<ErrorComponent/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
