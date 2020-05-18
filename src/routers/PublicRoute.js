import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import Header from '../components/Header';

export const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => (
    <Route {...rest} component ={(props) => (
        <div>
            <Header />
            <Component {...props}/>
        </div>
    )}/>
);

export default PublicRoute;