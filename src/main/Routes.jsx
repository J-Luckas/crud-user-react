import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import Home from '../Components/home/Home';
import UserCrud from '../Components/user/UserCrud';

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>

