import React from 'react';
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom'
import { Roles } from 'meteor/alanning:roles'
import { Accounts } from 'meteor/accounts-base'


import MainContainer from './MainContainer.jsx';

export default class AppContainer extends React.Component {

    isAdmin = Roles.userIsInRole(Meteor.userId(), ['admin']);

    logout(e) {
        e.preventDefault()
        Accounts.logout()
    }

    render() {
        const user = Meteor.user()
        this.isAdmin = Roles.userIsInRole(Meteor.userId(), ['admin'])

        return (
            <div>
                {
                    user ? <div>
                        <nav className="navbar navbar-default navbar-static-top">
                            <div className="container">
                                <div className="navbar-header">
                                    <a className="navbar-brand" href="#">Blogs App</a>
                                </div>
                                <div className="navbar-collapse">
                                    {
                                        this.isAdmin ? <ul className="nav navbar-nav navbar-left">
                                            <li className="nav-item">
                                                <Link to={'/blogForm'}>Create Blog</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={'/admin/users'}>Users</Link>
                                            </li>
                                        </ul> : ''
                                    }
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="nav-item">
                                            <a>{user.username}</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" onClick={this.logout.bind(this)}>Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <MainContainer />
                    </div> : ''
                }
            </div>
        );
    }
}