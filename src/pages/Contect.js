import React from 'react';
import './Contect.scss';
import Footer from './Footer';
import bgvideo from './imgs/9ecfb453946957.594bc3870b754.gif';
function Contect() {
    return (
        <>
            <div className="contact-us-container">
                <h1>Get in Touch</h1>
                <p>We are looking forward to offering you help about our products and related services.</p>
                <div className="contact-form">
                    <span className="input-item-2">
                        <i class="fa-regular fa-user"></i>
                    </span>
                    <input className="form-input2" type="text" placeholder="*Name" required />
                    <span className="input-item-2">
                        <i class="fa-regular fa-envelope"></i>
                    </span>
                    <input className="form-input2" type="email" placeholder="*Email" required />
                    <br />
                    <span className="input-item-2">
                        <i class="fa-solid fa-phone"></i>
                    </span>
                    <input className="form-input2" type="text" maxLength={10} placeholder="Number" required />
                    <span className="input-item-2">
                        <i class="fa-solid fa-location-dot"></i>
                    </span>
                    <input className="form-input2" type="text" placeholder="Country" required />
                    <br />
                    <span className="input-item-2">
                        <i class="fa-regular fa-comment-dots"></i>
                    </span>
                    <input className="form-input2" type="text" placeholder="*Content" required />
                    <br />
                    <input type="button" value="Submit" className='contact-btn' />
                </div>
            </div>
            <div className='contact-us-container-2'>
                <img src={bgvideo} alt="" className='bgvideo' />
                <div className='bgvideo-text'>
                    <h4>Our Location</h4>
                    <p>1841&1842, Tower A, Wanda Plaza, #171, Zhongyuan Road, Zhengzhou, Henan, India</p>
                    <h2>Quich Touch</h2>
                    <i className="fa-solid fa-phone bg-phone"></i>
                    <h6>Tel: +86-371-68616866 <br /> Fax: +86-371-68616868</h6>
                </div>
            </div>
            <br />
            <br />

            <Footer />
        </>
    )
}

export default Contect;