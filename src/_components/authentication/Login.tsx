import React from 'react';
import { useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../sharedControls/LoadingSpinner';
import PageHeader from '../sharedControls/PageHeader';
import authenticationService from '../../_services/authentication.service'; 

interface User {
    // Define the properties of the user object based on your actual response
    id: string;
    name: string;
    // Add other properties as needed
}


const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = authenticationService.currentUserValue;

        if (currentUser && currentUser.data) {
            const roles = currentUser.roles.result;

            if (roles) {
                if (roles.includes('Admin')) {
                    navigate('/admin/courses');
                } else if (roles.includes('Student') || roles.includes('Instructor')) {
                    navigate('/courses');
                }
            }
        }
    }, [navigate]);

    if (!authenticationService.currentUserValue) {
        return (
            <div>
                <PageHeader title="Login" />
                <div className="p-2">
                    <Formik
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        validationSchema={Yup.object().shape({
                            username: Yup.string().required('Username is required'),
                            password: Yup.string().required('Password is required')
                        })}
                        onSubmit={async ({ username, password }, { setStatus, setSubmitting }) => {
                            setStatus();
                            try {
                                const result: User | AxiosResponse<any> = await authenticationService.login(username, password);

                                if ('status' in result) {
                                    // AxiosResponse, handle the response data
                                    if (result.status !== 200) {
                                        setStatus(result.data["message"]);
                                    } else {
                                        const responseData = result.data as { roles: { result: string[] } };
                                        if (responseData.roles != null) {
                                            if (responseData.roles.result.includes('Admin')) {
                                                navigate('/admin/courses');
                                            } else {
                                                navigate('/courses');
                                            }
                                        }
                                    }
                                } else {
                                    if ('data' in result) {
                                        // User object, successful login
                                        const responseData = result.data as { roles: { result: string[] } };
                                        if (responseData.roles != null) {
                                            if (responseData.roles.result.includes('Admin')) {
                                                navigate('/admin/courses');
                                            } else {
                                                navigate('/courses');
                                            }
                                        }
                                    }
                                }
                            } catch (error: any) {
                                setStatus(error.message);
                            } finally {
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({ errors, status, touched, isSubmitting }) => (
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <Field
                                        name="username"
                                        type="text"
                                        className={`form-control ${errors.username && touched.username ? 'is-invalid' : ''}`}
                                    />
                                    <ErrorMessage name="username" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Field
                                        name="password"
                                        type="password"
                                        className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
                                    />
                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                        Login
                                    </button>
                                    <span className="ml-2 small">
                                        Not registered yet? Register as a <Link to="/register-with-code">Student</Link>&nbsp;or&nbsp;
                                        <Link to="/register">Instructor</Link>
                                    </span>
                                    {isSubmitting && <LoadingSpinner />}
                                </div>
                                {status && <div className="alert alert-danger">{status}</div>}
                            </Form>
                        )}
                    </Formik>

                </div>
            </div>
        );
    } else {
        return <div>You are signed in as {authenticationService.currentUserValue["username"]}!</div>;
    }
};

export default Login;
