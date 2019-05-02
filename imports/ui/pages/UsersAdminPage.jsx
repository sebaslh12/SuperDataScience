import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react'
import PropTypes from 'prop-types'

class UsersAdminPage extends React.Component {

    renderUsers(users) {
        return users.map((user) => {
            return (<div className="list-group-item" key={user._id}>
                <div className="d-flex w-100 justify-content-between">
                    <h3 className="mb-1">{user.username}</h3>
                    <small className="blog-description">{user.emails[0].address}</small>
                </div>
            </div>)
        })
    }

    render() {
        let users = this.props.users
        return (
            <div className="container">
                <div className="list-group text-center">
                    {this.renderUsers(users)}
                </div>
            </div>
        )
    }
}

export default withTracker(() => {
    Meteor.subscribe('allUsers');
    return {
        users: Meteor.users.find().fetch(),
    };
})(UsersAdminPage);