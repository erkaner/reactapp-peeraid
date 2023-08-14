import axios from "axios";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../sharedControls/LoadingSpinner';
import PageHeader from '../sharedControls/PageHeader';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [formData, setFormData] = useState({ 
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value.trim(),
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setSubmitted(true);
        setLoading(true);
        setError('');

        try {
            await axios.post('api/account/register', {
                FirstName: formData.firstName,
                LastName: formData.lastName,
                Username: formData.email,
                Password: formData.password,
                IsLocked: true,
                Role: 'Admin',
            });

            setLoading(false);
            console.log('success: registration');

            //localStorage.setItem('user', formData.email);
            navigate('/login');
        } catch (error: any) {
            setLoading(false);
            console.log('error:' + error.message);
            setError(error.message);
        }
    };

    return (
        <>
            {loading && <LoadingSpinner />}

            <div className="pt-3 mb-4">
                <div className="bg-light p-2 small">
                    <p className="">
                        This registration form is only for instructors. After registration, you may use the system once your account is approved.
                    </p>
                    <p className="">
                        If you experience any delays or have any questions, please email us a
                <PageHeader title="Registration [For Instructors Only]" />t <span className="text-primary bg-light">learnwithsynergy@gmail.com</span>.
                    </p>
                    <p className="">
                        If you are a student trying to access the system, please contact your instructor to ask for the course registration code. Once you know the code, you can register here:&nbsp;
                        <a className="text-primary bg-light" href="https://synergylearn.net/register-with-code">https://synergylearn.net/register-with-code</a>.
                    </p>
                </div>
            </div>

            <form name="form" onSubmit={handleSubmit}>
                <div className={'form-group' + (submitted && !formData.firstName ? ' has-error' : '')}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} />
                    {submitted && !formData.firstName && <div className="small text-danger">First Name is required</div>}
                </div>
                <div className={'form-group' + (submitted && !formData.lastName ? ' has-error' : '')}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} />
                    {submitted && !formData.lastName && <div className="small text-danger">Last Name is required</div>}
                </div>
                <div className={'form-group' + (submitted && !formData.email ? ' has-error' : '')}>
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                    {submitted && !formData.email && <div className="small text-danger">Email is required</div>}
                </div>
                <div className={'form-group' + (submitted && !formData.password ? ' has-error' : '')}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} />
                    {submitted && !formData.password && <div className="small text-danger">Password is required</div>}
                </div>
                <div className="text-dark small pb-3">
                    By clicking Register, you agree to our <Link target="_blank" to="/terms-of-service">Terms of Service</Link>. Learn how we collect, use, and share your anonymized data for research in our <Link target="_blank" to="/privacy-policy">Privacy Policy</Link>.
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Register</button>
                </div>

                {error !== '' && <div className="text-danger">{error}</div>}
            </form>
        </>
    );
};

export default Register;
