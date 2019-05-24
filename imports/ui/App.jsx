import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router'
import { createBrowserHistory } from "history"
import { Tracker } from 'meteor/tracker'


import AppContainer from './containers/AppContainer'
import SignupPage from './pages/login/SignupPage'
import LoginPage from './pages/login/LoginPage'
import BlogFormPage from './pages/blogs/BlogFormPage';
import ViewBlogPage from './pages/blogs/ViewBlogPage';
import UsersAdminPage from './pages/users/UsersAdminPage';

const unauthenticatedPages = ['/', '/signup', '/login', '/admin/users/']
const authenticatedPages = ['/blog', '/blogForm']

const onEnterPublicPage = (Component) => {
    if (Meteor.userId()) {
        return <Redirect to="/links" />
    } else {
        return <Component />
    }
}

const onEnterPrivatePage = (Component) => {
    if (!Meteor.userId()) {
        return <Redirect to="/" />
    } else {
        return <Component />
    }
}


const customHistory = createBrowserHistory()
const routes = (
    <Router history={customHistory}>
        <Switch>
            <Redirect exact from="/" to="/login" />
            <Route path="/login" render={() => onEnterPublicPage(LoginPage)} ></Route>
            <Route path="/signup" render={() => onEnterPublicPage(SignupPage)} ></Route>
            <Route exact path="/blog" render={() => onEnterPrivatePage(AppContainer)} ></Route>
            <Route path="/blog/:id" render={() => onEnterPrivatePage(ViewBlogPage)}></Route>
            <Route exact path="/blogForm/:id" render={() => onEnterPrivatePage(BlogFormPage)}></Route>
            <Route exact path="/blogForm/" render={() => onEnterPrivatePage(BlogFormPage)}></Route>
            <Route exact path="/admin/users/" render={() => onEnterPrivatePage(UsersAdminPage)}></Route>
        </Switch>
    </Router>
)


Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId()
    const pathName = customHistory.location.pathname
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathName)
    const isAuthenticatedPage = !!authenticatedPages.map((path) => path.includes(pathName)).length
    if (isAuthenticated && isUnauthenticatedPage) {
        customHistory.replace('/blog')
    } else if (!isAuthenticated && isAuthenticatedPage) {
        customHistory.replace('/')
    }
})

class App extends React.Component {
    render() {
        return (
            <div>
                {routes}
            </div>
        )
    }
}

export default App