import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

//client-side routing, not server-side
const NotFoundPage = () => (
    <div> 
        404 - <Link to='/' >Go home</Link>
    </div>
);

export default NotFoundPage;