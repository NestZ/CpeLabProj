import { Route, Redirect } from 'react-router-dom';
import React from 'react';

const NotRequireAuth = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => !localStorage.getItem('token') ?
    (<Component {...props} />) : (<Redirect to={{pathname : '/mainmenu', state : { from : props.location }}}/>)} />
);

export default NotRequireAuth;