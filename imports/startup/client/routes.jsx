import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import AppContainer from '../../ui/containers/AppContainer'

import SignupPage from '../../ui/pages/login/SignupPage'
import LoginPage from '../../ui/pages/login/LoginPage'
import BlogFormPage from '../../ui/pages/blogs/BlogFormPage';
import ViewBlogPage from '../../ui/pages/blogs/ViewBlogPage';


export const renderRoutes = () => (
    <Router>
        <div>
            <Switch>
                <Redirect exact={true} from="/" to="/login"/>
                <Route path="/login" component={LoginPage}></Route>
            </Switch>
            <Route path="/signup" component={SignupPage}></Route>
            <Route exact={true} path="/blog" component={AppContainer}></Route>
            <Route path="/blog/:id" component={ViewBlogPage}></Route>
            <Route exact={true} path="/blogForm/:id" component={BlogFormPage}></Route>
            <Route exact={true} path="/blogForm/" component={BlogFormPage}></Route>
        </div>
    </Router>
)