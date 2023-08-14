import React from 'react';
import { Route } from 'react-router-dom';
import authenticationService from '../../_services/authentication.service';

interface PrivateRouteProps {
    path: string;
    isAnonymousPage: boolean;
    component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({path, isAnonymousPage, component, ...rest }) => {
    const isAuthenticated = authenticationService.currentUserValue !== null;

    if (isAnonymousPage || isAuthenticated) {
        return <Route {...rest} Component={component} />;
    }

    return null;
};

export default PrivateRoute;