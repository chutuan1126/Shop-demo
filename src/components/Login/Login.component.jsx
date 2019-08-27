import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom/Redirect';
import './login.styles.css';
import FormInput from '../Form_Input/FormInput.component';
import CustomButton from '../Custom_Button/Custom_Button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    console.log(userCredential);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorCode) {
                        alert(errorMessage);
                        return;
                    }
                });

            this.setState({
                email: '',
                password: ''
            });
            // return <Redirect to='/' />
        }
        catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className='Login'>
                <h2>I already have an account</h2>
                <span>Login with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email'
                        name='email'
                        label='Email'
                        onChange={this.handleChange}
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        label='Password'
                        onChange={this.handleChange}
                        value={this.state.password}
                        required
                    />
                    <CustomButton type="submit">Login</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} googleSignIn >Login With Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default Login;