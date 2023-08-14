import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './_components/template/Layout';
import LoadingSpinner from './_components/sharedControls/LoadingSpinner';
import UserGuides from './_components/staticpages/UserGuides';
import Contact from './_components/staticpages/Contact';
import CaseStudies from './_components/staticpages/CaseStudies';
import ResearchTeam from './_components/staticpages/ResearchTeam';
import Research from './_components/staticpages/Research';
import TermsOfService from './_components/staticpages/TermsOfService';
import PrivacyPolicy from './_components/staticpages/PrivacyPolicy';
import CopyrightPolicy from './_components/staticpages/CopyrightPolicy';
import TryOutSynergy from './_components/staticpages/TryOutSynergy';
import Login from './_components/authentication/Login';
import Register from './_components/authentication/Register';
import PrivateRoute from './_components/sharedControls/PrivateRoute';
import Home from './_components/staticpages/Home';

const App: React.FC = () => {

    return (
        <Layout>
            <Suspense fallback={<LoadingSpinner />}>
                <Routes >
                    {/*<PrivateRoute path="/" component={Home} isAnonymousPage={true} />*/}
                    {/*<PrivateRoute path="/home" component={Home} isAnonymousPage={true} />*/}

                    {/*<PrivateRoute path='/login' component={Login} isAnonymousPage={true} />*/}
                    {/*<PrivateRoute path='/register' component={Register} isAnonymousPage={true} />*/}


                    <Route path='/home' element={<Home />} />

                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />

                    <Route path='/terms-of-service' element={<TermsOfService />} />
                    <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                    <Route path='/copyright-policy' element={<CopyrightPolicy />} />
                    <Route path='/tryout' element={<TryOutSynergy />} />
                    <Route path='/user-guides' element={<UserGuides />} />
                    <Route path='/research' element={<Research />} />
                    <Route path='/case-studies' element={<CaseStudies />} />
                    <Route path='/research-team' element={<ResearchTeam />} />
                    <Route path='/contact' element={<Contact />} />

                    <Route path='*' element={<Home />} />


                </Routes >
            </Suspense>
        </Layout>
    );
}
export default App;
