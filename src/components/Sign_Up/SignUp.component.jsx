import React from 'react';
import './signUp.styles.css';
import FormInput from '../Form_Input/FormInput.component';
import CustomButton from '../Custom_Button/Custom_Button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirm_password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirm_password } = this.state;

        if (password !== confirm_password) {
            alert("password don't match !");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if(errorCode) {
                    alert(errorMessage);
                    return;
                }
            });

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirm_password: ''
            });

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
            <div className='sign-up'>
                <h2>I do not have an account</h2>
                <span>Sign Up with your Email or Phone</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        label='Display Name'
                        onChange={this.handleChange}
                        value={this.state.displayName}
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        label='Email or Phone'
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
                    <FormInput
                        type='password'
                        name='confirm_password'
                        label='Confirm Password'
                        onChange={this.handleChange}
                        value={this.state.confirm_password}
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;