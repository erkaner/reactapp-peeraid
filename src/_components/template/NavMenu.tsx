import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Collapse, NavbarBrand } from 'reactstrap';
import { useNavigate, Link } from 'react-router-dom';
import './NavMenu.css';
import authenticationService from '../../_services/authentication.service';

// Define the shape of your Course object
interface Course {
    id: string;
    title: string;
    // Add other properties specific to the Course object
}

interface NavMenuProps {
    courses: Course[]; // Assuming Course is the type for individual course objects
    currentCourse: Course | null;
}

interface AppState {
    courseReducer: {
        courses: Course[];
        currentCourse: Course | null;
        // Add other properties specific to the courseReducer
    };
}

const NavMenu: React.FC<NavMenuProps> = ({ courses, currentCourse }) => {
    const [st_CurrentUser, set_CurrentUser] = useState<any>(null);
    const [st_isAdmin, set_isAdmin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const subscription = authenticationService.currentUser.subscribe((x: any) => set_CurrentUser(x));
        if (authenticationService.currentUserValue)
            set_isAdmin(authenticationService.currentUserValue.roles.result.includes('Admin'));

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const logout = (event: any) => {
        if (event) event.preventDefault();

        authenticationService.logout();
        navigate('/login');
    };

    return (
        <div className="bg-white">
            {!st_CurrentUser && (
                <div className="p-4 d-flex justify-content-center" style={{
                    backgroundColor: '#0d4862',
                    backgroundImage: "url(/siteimages/header-background.jpg)",
                    borderBottom: "10px solid #8ed2bd",
                }}>
                    <div className="">
                        <img width="85px" src={`siteimages/synergy-dialogue.png`} alt="Synergy Dialogue" />
                    </div>
                    <div className="ml-4">
                        <div className="h3 text-uppercase text-white round" style={{ letterSpacing: '0.05em', lineHeight: '32px' }}>
                            AI-Powered Peer Learning
                        </div>
                        <div className="text-center text-white" style={{ letterSpacing: '0.05em' }}>
                            Leveraging AI to create adaptive and personalized peer learning experiences
                        </div>
                    </div>
                </div>
            )}

            {st_CurrentUser && (
                <>
                    <NavbarBrand tag={Link} to="/Home">
                        <img height="50" src={`siteimages/synergy-logo.jpg`} alt="Synergy Logo" />
                    </NavbarBrand>
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" navbar>
                        <ul className="navbar-nav flex-grow">
                            <div>
                                <div className="text-right">
                                    Welcome <span className="font-weight-bold text-primary">{authenticationService.currentUserValue['firstName']}</span>
                                    &nbsp;(<span className="text-info">{authenticationService.currentUserValue['email']}</span>)
                                </div>
                                <div className="small text-right">
                                    {!st_isAdmin && authenticationService.currentUserValue['gmailAddress'] &&
                                        <>
                                            <Link className="btn btn-sm btn-link text-primary" to="/courses">Courses</Link><span>|</span>
                                        </>
                                    }
                                    <Link className="btn btn-sm btn-link text-primary" to="/user-guides">User Guides</Link>|

                                    {st_isAdmin &&
                                        <>
                                            <Link className="btn btn-sm btn-link text-primary" to="/admin/courses">Courses</Link>|
                                            <Link className="btn btn-sm btn-link text-primary" to="/admin/instructor-list">Instructors</Link>|
                                        </>
                                    }

                                    <Link className="btn btn-sm btn-link text-primary" to="/update-profile">Edit Profile</Link>|
                                    <button className="btn btn-sm btn-link text-primary" onClick={logout}>Logout</button>

                                    {authenticationService.currentUserValue['gmailAddress'] && currentCourse &&
                                        <div>
                                            <span>{currentCourse.title}</span>
                                            &nbsp; | <Link to="/assignments">Assignments</Link>
                                        </div>
                                    }
                                </div>
                            </div>
                        </ul>
                    </Collapse>
                </>
            )}
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    courses: state.courseReducer.courses,
    currentCourse: state.courseReducer.currentCourse,
});

export default connect(mapStateToProps)(NavMenu);
