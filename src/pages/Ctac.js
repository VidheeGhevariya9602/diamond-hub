import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Ctac.scss';
function Ctac() {

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        document.getElementById("reset").reset(); // Reset form
    }

    return (
        <div className='ctac-p1'>
            <div className='ctac-p1-p1'>
                <h2>CREATE AN ACCOUNT</h2>
                <hr className='login-p1-p1-hr' />
                <form onSubmit={handleSubmit(onSubmit)} id="reset">
                    <h6>First Name <span style={{ color: 'red' }}>*</span></h6>
                    <input type="text" className='ctac-input' {...register("firstname", { required: true })} required />
                    <h6>Last Name <span style={{ color: 'red' }}>*</span></h6>
                    <input type="text" className='ctac-input' {...register("lastname", { required: true })} required />
                    <h6>Email Address <span style={{ color: 'red' }}>*</span></h6>
                    <input type="text" className='ctac-input' {...register("email", { required: true })} required />
                    <h6>Password <span style={{ color: 'red' }}>*</span></h6>
                    <input type="text" className='ctac-input' {...register("password", { required: true })} required />
                    <h6>Confirm Password <span style={{ color: 'red' }}>*</span></h6>
                    <input type="text" className='ctac-input' {...register("confirmpassword", { required: true })} required /><br />
                    <button className='ctac-btn'>SUBMIT</button>
                </form>
            </div>
            <div className="ctac-p1-p2">
                <h6>Already have an (company) Account? &nbsp; <Link to='/login'> Login.</Link></h6>
            </div>
        </div>
    )
}

export default Ctac;
