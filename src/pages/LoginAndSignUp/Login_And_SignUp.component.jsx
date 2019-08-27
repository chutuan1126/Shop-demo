import React, { Component } from 'react';
import './login-signup.styles.css';

import Login from '../../components/Login/Login.component';
import SignUp from '../../components/Sign_Up/SignUp.component';

class LoginAndSignUp extends Component {
    render() {
        return (
            <div className='login-and-signup'>
                <Login />
                <SignUp />
            </div>
        )
    }
}

export default LoginAndSignUp;