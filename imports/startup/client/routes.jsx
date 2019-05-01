import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppContainer from '../../ui/containers/AppContainer'

import SignupPage from '../../ui/pages/SignupPage'
import LoginPage from '../../ui/pages/LoginPage'
import BlogFormPage from '../../ui/pages/BlogFormPage';
import BlogView from '../../ui/blogs/BlogView';

export const renderRoutes = () => (
    <Router>
        <div>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/signup" component={SignupPage}></Route>
            <Route exact={true} path="/blog" component={AppContainer}></Route>
            <Route exact={true} path="/blogForm/:id" component={BlogFormPage}></Route>
            <Route exact={true} path="/blogForm/" component={BlogFormPage}></Route>
            <Route path="/blog/:id" component={BlogView}></Route>
        </div>
    </Router>
)