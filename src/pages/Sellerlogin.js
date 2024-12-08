import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EmailPart from './email';
import zero from './imgs/0-percent.png';
import hours from './imgs/24-hours.png';
import calculator from './imgs/calculator.png';
import user from './imgs/user-profile.png';
import './Sellerlogin.scss';

function Sellerlogin() {
    const Password = () => {
        const [password, setPassword] = useState('');
        const [showPassword, setShowPassword] = useState(false);
        const validationRegex = [
            { regex: /.{8,}/, description: 'At least 8 characters long' },
            { regex: /[0-9]/, description: 'At least 1 number' },
            { regex: /[a-z]/, description: 'At least 1 lowercase letter' },
            { regex: /[A-Z]/, description: 'At least 1 uppercase letter' },
            { regex: /[^A-Za-z0-9]/, description: 'At least 1 special character' },
        ];

        const handlePasswordChange = (e) => {
            const newPassword = e.target.value;
            setPassword(newPassword);

            validationRegex.forEach((item, i) => {
                const isValid = item.regex.test(newPassword);
                const checklistItem = document.getElementById(`checklist-item-${i}`);

                if (isValid) {
                    checklistItem.classList.add('checked');
                } else {
                    checklistItem.classList.remove('checked');
                }
            });
        };

        const handleShowPasswordToggle = () => {
            setShowPassword((prevShowPassword) => !prevShowPassword);
        };
        return (
            <div className='pass-part'>
                <h6>We need these details to set up your account.you can also chose to fill them in the nest step.</h6>
                <div className="password-input-box">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        className="password-input"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <i
                        className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'} show-password`}
                        onClick={handleShowPasswordToggle}
                    />
                    <div className="password-checklist">
                        <ul className="checklist">
                            {validationRegex.map((item, i) => (
                                <li
                                    key={i}
                                    id={`checklist-item-${i}`}
                                    className="list-item"
                                >
                                    {item.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <input type="text" placeholder='Enter your full name' className='pass-name' />
            </div>
        )
    };
    // ---------------------------------------------------------------------------------
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        admissionNumber: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };
    const [currentPage, setCurrentPage] = useState(0);   // button
    const validateForm = () => {
        const newErrors = {};
        if (!formData.fName) {
            newErrors.fName = 'Your mobile number is required';
        }
        if (!formData.lName) {
            newErrors.lName = 'Email ID is required';
        }
        if (!formData.admissionNumber) {
            newErrors.admissionNumber = 'GST Number is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNextClick = () => {
        if (validateForm() && currentPage < 1) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };
    const iiVisibility = currentPage === 1 ? 'visible' : 'hidden';
    const iiiVisibility = currentPage === 0 ? 'visible' : 'hidden';

    const getCurrentTabContent = () => {
        switch (currentPage) {
            case 0:
                return (
                    <EmailPart
                        handleInputChange={handleInputChange}
                        errors={errors}
                        formData={formData}
                    />
                );
            case 1:
                return <Password />;
            default:
                return null;
        }
    };

    return (
        <div className="sl-p1">
            <div className='sl-p1-p1'>
                <div className="tabcontent">{getCurrentTabContent()}</div>
                <div className="button-div-prev-next">
                    <button
                        className="button-next-previous round"
                        onClick={handleNextClick}
                        style={{ visibility: iiiVisibility }}
                    >
                        Register and Continue
                    </button>
                    <Link to='/listing'>
                        <button
                            style={{ visibility: iiVisibility }}
                            className='submit-btn'
                        >
                            Submit
                        </button>
                    </Link>
                </div>
            </div>
            <div className="sl-p1-p2">
                <div className="sl-box-1">
                    <img src={zero} alt="..."
                        style={{
                            height: '10vh',
                            width: '10vh'
                        }} />
                    <h5>Higher Profits</h5>
                    <p>With 0% commission* , you take 100% profits with you</p>
                </div>
                <div className="sl-box-2">
                    <img src={user} alt="..."
                        style={{
                            height: '10vh',
                            width: '10vh'
                        }} />
                    <h5>Account Management</h5>
                    <p>Our Dedicated managers will help your business on Flipkart</p>
                </div>
                <div className="sl-box-3">
                    <img src={hours} alt="..."
                        style={{
                            height: '10vh',
                            width: '10vh'
                        }} />
                    <h5>24x7 Seller Support</h5>
                    <p>All your queries and issues are answered by our dedicated Seller Support Team</p>
                </div>
                <div className="sl-box-4">
                    <img src={calculator} alt="..."
                        style={{
                            height: '10vh',
                            width: '10vh'
                        }} />
                    <h5>Simple Pricing Calculator</h5>
                    <p>Use our simple pricing calculator to decide the best and competitive selling price for your product</p>
                </div>
            </div>
        </div>
    );
};

export default Sellerlogin;