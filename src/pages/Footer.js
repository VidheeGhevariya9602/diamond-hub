import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
    const send = () => {
        document.getElementById("email").value = "";
        alert("Sign up successfully 😊..")
    }
    return (
        <div className='footer'>
            <div className='promise'>
                <header className='footer-header'>Our Promise</header>
                <h6>We love our customers and we provide them only high quality jewellery. You can reach out to us at +91-000000000 or at care@cosmos.diamonds</h6>
            </div>
            <div className="social-icons">
                <ul className='f-ul'>
                    <li className='f-li'>
                        <i class="fa-brands fa-facebook-f"></i>
                    </li>
                    <li className='f-li'>
                        <i class="fa-brands fa-instagram"></i>
                    </li>
                    <li className='f-li'>
                        <i class="fa-brands fa-whatsapp"></i>
                    </li>
                </ul>
            </div>
            <div className='f-about'>
                <header className='footer-header'>About Us</header>
                <Link to="/" className='f-link'>
                    <h6 className='f-h6'>Home</h6>
                </Link>
                <Link to="/about" className='f-link'>
                    <h6 className='f-h6'>About</h6>
                </Link>
                <Link to="/howbuy" className='f-link'>
                    <h6 className='f-h6'>The 4Cs</h6>
                </Link>
                <Link to="/contect" className='f-link'>
                    <h6 className='f-h6'>Contact</h6>
                </Link>
                <Link to="/Privacypolicy" className='f-link'>
                    <h6 className='f-h6'>Privacy Policy</h6>
                </Link>
            </div>
            <div className='f-product'>
                <header className='footer-header'>Product Details</header>
                <Link to="/rough" className='f-link'>
                    <h6 className='f-h6'>Rough Diamond</h6>
                </Link>
                <Link to="/cvd" className='f-link'>
                    <h6 className='f-h6'>CVD Diamond</h6>
                </Link>
            </div>
            <div className='f-selling'>
                <header className='footer-header'>Selling Product</header>
                <Link to="/product" className='f-link'>
                    <h6 className='f-h6'>All type Diamond</h6>
                </Link>
            </div>
            <div className='f-seller'>
                <header className='footer-header'>Seller Details</header>
                <Link to="/startselling" className='f-link'>
                    <h6 className='f-h6'>About Our seller site</h6>
                </Link>
                <Link to="/sellerlogin" className='f-link'>
                    <h6 className='f-h6'>Seller Login</h6>
                </Link>
                <Link to="/listing" className='f-link'>
                    <h6 className='f-h6'>New Listing</h6>
                </Link>
                <Link to="/admin" className='f-link'>
                    {/* Admin */}
                </Link>
            </div>
            <div className='footer-p2'>
                <header className='footer-header'>Sign Up to Get Email Updates</header>
                <input type="email" name="email" id="email" placeholder='EMAIL ADDRESS' className='footer-email' required />
                <input type="button" value="Sigh up" onClick={send} className='footer-btn' />
            </div>
            <ul className="footer-ul3">
                <header className='footer-header'>Contact Us</header>
                <h6 className='f-h6'>Tel: +86-371-68616866</h6>
                <h6 className='f-h6'>Fax: +86-371-68616868</h6>
            </ul>
            <hr className='footer-hr' />
            <p className='footer-p'>© 2018 K&K Rough Diamond. All Rights Reserved.</p>
        </div>
    )
}

export default Footer;
