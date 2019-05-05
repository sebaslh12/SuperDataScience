import React from 'react'
import { Link } from 'react-router-dom'

export default class LoginPage extends React.Component {
    constructor() {
        super()
        this.isLoggedIn = this.getMeteorData()
    }
    state = {
        error: ''
    };

    handleSubmit(e) {
        e.preventDefault();
        let email = document.getElementById('login-email').value;
        let password = document.getElementById('login-password').value;
        Meteor.loginWithPassword(email, password, (err) => {
            if (err) {
                this.setState({
                    error: err.reason
                });
            } else {
                this.props.history.push('/blog');
            }
        });
    }

    getMeteorData() {
        return Meteor.userId() !== null;
    }

    componentWillMount() {
        if (this.isLoggedIn) {
            this.props.history.push('/blog');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.isLoggedIn) {
            this.props.history.push('/blog');
        }
    }

    render() {
        const error = this.state.error;
        return (
            <div className="modal show">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="text-center">Login</h1>
                        </div>
                        <div className="modal-body">
                            {error.length > 0 ?
                                <div className="alert alert-danger fade in">{error}</div>
                                : ''}
                            <form id="login-form"
                                className="form col-md-12 center-block"
                                onSubmit={this.handleSubmit.bind(this)}>
                                <div className="form-group">
                                    <input type="email"
                                        id="login-email"
                                        className="form-control input-lg"
                                        placeholder="email" />
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                        id="login-password"
                                        className="form-control input-lg"
                                        placeholder="password" />
                                </div>
                                <div className="form-group text-center">
                                    <button id="login-button"
                                        className="btn btn-primary btn-lg btn-block">
                                        Login
                                    </button>
                                </div>
                                <div className="form-group text-center">
                                    <p className="text-center">
                                        Don't have an account? Register <Link to="/signup">here</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer"></div>
                    </div>
                </div>
            </div>
        );
    }
}