import React from 'react'
import { Router, Switch, Route } from 'react-router'
import { createBrowserHistory } from "history"
import { Tracker } from 'meteor/tracker'


const unauthenticatedPages = ['/', '/signup']
const authenticatedPages = ['/links']

const customHistory = createBrowserHistory()
const routes = (
    <Router history={customHistory}>
        <Switch>
            <Redirect exact={true} from="/" to="/login" />
            <Route path="/login" component={LoginPage}></Route>
        </Switch>
        <Route path="/signup" component={SignupPage}></Route>
        <Route exact={true} path="/blog" component={AppContainer}></Route>
        <Route path="/blog/:id" component={ViewBlogPage}></Route>
        <Route exact={true} path="/blogForm/:id" component={BlogFormPage}></Route>
        <Route exact={true} path="/blogForm/" component={BlogFormPage}></Route>
    </Router>
)


Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId()
    const pathName = customHistory.location.pathname
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathName)
    const isAuthenticatedPage = authenticatedPages.includes(pathName)
    if (isAuthenticated && isUnauthenticatedPage) {
        customHistory.push('/links')
    } else if (!isAuthenticated && isAuthenticatedPage) {
        customHistory.push('/')
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