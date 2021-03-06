import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class SignupPage extends React.Component {

    state = {
        error: ''
    };

    handleSubmit(e) {
        e.preventDefault();
        let name = document.getElementById("signup-name").value;
        let email = document.getElementById("signup-email").value;
        let password = document.getElementById("signup-password").value;
        Accounts.createUser({ email: email, username: name, password: password }, (err) => {
            if (err) {
                this.setState({
                    error: err.reason
                });
            } else {
                this.props.history.push('/blog');
            }
        });
    }

    render() {
        const error = this.state.error;
        return (
            <div className="modal show">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="text-center">Sign up</h1>
                        </div>
                        <div className="modal-body">
                            {error.length > 0 ?
                                <div className="alert alert-danger fade in">{error}</div>
                                : ''}
                            <form id="login-form"
                                className="form col-md-12 center-block"
                                onSubmit={this.handleSubmit.bind(this)}>
                                <div className="form-group">
                                    <input type="text" id="signup-name"
                                        className="form-control input-lg" placeholder="name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" id="signup-email"
                                        className="form-control input-lg" placeholder="email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" id="signup-password"
                                        className="form-control input-lg"
                                        placeholder="password" />
                                </div>
                                <div className="form-group">
                                    <button id="login-button"
                                        className="btn btn-primary btn-lg btn-block">
                                        Signup
                                    </button>
                                </div>
                                <div className="form-group">
                                    <p className="text-center">
                                        Already have an account? Login <Link to="/login">here</Link>
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