import './Sellerlogin.scss';

const EmailPart = ({ handleInputChange, errors, formData }) => {
    return (
        <div className='email-part'>
            <h4>EMAIL ID & GST</h4>
            <div style={{ position: 'relative' }}>
                <input type="text" placeholder="Enter mobile mumber" name="fName" value={formData.fName} onChange={handleInputChange}
                />
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    style={{
                        marginLeft: '-17vh',
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: 'white'
                    }}>
                    Send OTP
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ backgroundColor: 'black' }}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">OTP</h5>
                            </div>
                            <div className="modal-body">
                                <div class="otp-input">
                                    <input type="text" maxlength="4" className='iii' />
                                    <div class="otp-box-group">
                                        <div aria-hidden="true" class="otp-box"></div>
                                        <div aria-hidden="true" class="otp-box"></div>
                                        <div aria-hidden="true" class="otp-box"></div>
                                        <div aria-hidden="true" class="otp-box"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Verify</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {errors.fName &&
                <div className="error-message">
                    {errors.fName}
                </div>
            }

            <input type="text" placeholder="Enter Email ID" name="lName" value={formData.lName} onChange={handleInputChange}
            />
            {errors.lName &&
                <div className="error-message">
                    {errors.lName}
                </div>
            }
            <input type="text" placeholder="Enter GSTIN" name="admissionNumber" value={formData.admissionNumber} onChange={handleInputChange}
            />
            {errors.admissionNumber &&
                <div className="error-message">
                    {errors.admissionNumber}
                </div>
            }
            {/* <h6>By continuing, I agree to (Company) <Link to='/privacypolicy'>Privacy Policy</Link></h6> */}
        </div>
    )
}
export default EmailPart;