import React from 'react';
import './custom-button.styles.css';

const CustomButton = ({ children, googleSignIn, inverted, ...otherProps }) => (
    <button className={`custom-button ${googleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''}`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;