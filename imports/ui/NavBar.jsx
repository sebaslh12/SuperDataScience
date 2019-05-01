import React from 'react'
import PropTypes from 'prop-types';

export default class NavBar extends React.Component {

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
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Blogs App</a>
                    </div>
                    <div className="navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item">
                            <a>{this.props.username}</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" onClick={this.logout.bind(this)}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}


NavBar.propTypes = {
    username: PropTypes.string.isRequired
}