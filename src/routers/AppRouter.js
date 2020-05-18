import React from "react";
import { Router, Route, Switch} from 'react-router-dom';
import DashboardPage from './../components/DashboardPage';
import NotFoundPage from './../components/NotFoundPage';
import {createBrowserHistory} from 'history';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}> 
        <div>
            <Switch>
            <PublicRoute path='/' component={DashboardPage} exact={true}/>
            <Route component={NotFoundPage} />
        </Switch>
        </div>
    </Router>
);

export default AppRouter;