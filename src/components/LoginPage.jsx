 import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

const LoginPage = () => {

    const [showpassword, setShowPassword] = useState(false);

    const [mobile, setMobile] = useState(localStorage.getItem('mobile') || "");
    const [password, setPassword] = useState(localStorage.getItem('password') || "");

    const navigate = useNavigate();

     const handleLoginButton = () => {
         navigate("/form");
     }

    const handleShowPassword = () => {
        setShowPassword(!showpassword);
    }

    useEffect(() => {
        localStorage.setItem('mobile', mobile);
        localStorage.setItem('password', password);
    }, [mobile, password]);

    return (
        <div className="login-container">
            <div className="login-section">
                <div className="form-container">
                    <div className="login-img">
                        <img src="brand-logo-white.png"/>
                    </div>
                    <div className="authfy-heading">
                        <h3 className="login-title">Login to your account</h3>
                    </div>
                    <div className="form-section">
                        <form>
                            <div className="form-mobile-input">
                                <input className="form-control email" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={{ borderRadius: '0px' }} />
                                <span className="text-danger"></span>
                            </div>
                            <div className="form-group wrap-input">
                                <div className="form-password-input">
                                    <input className="form-control password" type={showpassword ? 'password' : 'text'} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <i className="bi bi-eye" onClick={handleShowPassword }></i>
                                </div>
                            </div>

                            <div className="row-3-input">
                                <div>
                                    <input type="checkbox" ></input>
                                    <span className="label-text">Remember me</span>
                                </div>
                                <div className="col-xs-6 col-sm-6">
                                    <p className="forgotPwd">
                                        <a href="ResetPassword">Reset password?</a>
                                    </p>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-lg btn-primary btn-block" style={{ background: 'orangered' }} onClick={handleLoginButton }>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;