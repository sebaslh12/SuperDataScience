import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppContainer from '../../ui/containers/AppContainer'
import MainContainer from '../../ui/containers/MainContainer'

import SignupPage from '../../ui/pages/SignupPage'
import LoginPage from '../../ui/pages/LoginPage'

export const renderRoutes = () => (
    <Router>
        <div>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/signup" component={SignupPage}></Route>
            <Route exact={true} path="/" component={AppContainer}></Route>
        </div>
    </Router>
)