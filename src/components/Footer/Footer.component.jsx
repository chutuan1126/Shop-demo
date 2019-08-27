import React from 'react';
import { Link } from 'react-router-dom';
import './footer.styles.css';

const Footer = () => {
    return (
        <footer className="page-footer font-small blue">
            <div className="footer-copyright text-center py-3">
                <span>© 2019 Design by</span>
                <Link to="/">
                    <span> ShoppingChannelOnline.net</span>
                </Link>
            </div>
        </footer>
    )
}

export default Footer;