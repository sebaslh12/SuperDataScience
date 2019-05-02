import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom'
import { Roles } from 'meteor/alanning:roles'

import React from 'react';

import MainContainer from './MainContainer.jsx';

export default class AppContainer extends React.Component {

    state = this.getMeteorData();
    isAdmin = Roles.userIsInRole(Meteor.userId(), ['admin']);


    getMeteorData() {
        return { isAuthenticated: Meteor.userId() !== null };
    }

    componentWillMount() {
        if (!this.state.isAuthenticated) {
            this.props.history.push('/login');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.state.isAuthenticated) {
            this.props.history.push('/login');
        }
    }

    logout(e) {
        e.preventDefault();
        Meteor.logout((err) => {
            if (err) {
                console.error(err.reason);
            } else {
                this.props.history.push('/login');
            }
        });
    }

    render() {
        const user = Meteor.user()
        this.isAdmin = Roles.userIsInRole(Meteor.userId(), ['admin']);

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