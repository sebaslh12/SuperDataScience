import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles'
import React from 'react';
import PropTypes from 'prop-types';

import { Blogs } from '../../../api/blogs';
import Blog from './Blog';

class BlogsPage extends React.Component {

    isAdmin = Roles.userIsInRole(Meteor.userId(), ['admin']);

    renderBlogs(blogs) {
        return blogs.map((blog) => <Blog key={blog._id} blog={blog} isAdmin={this.isAdmin}></Blog>)
    }

    render() {
        this.isAdmin = Roles.userIsInRole(Meteor.userId(), ['admin']);
        let blogs = this.props.blogs
        return (
            <div className="container">
                <div className="list-group text-center">
                    {this.renderBlogs(blogs)}
                </div>
            </div>
        );
    }
}

BlogsPage.propTypes = {
    username: PropTypes.string
}

export default withTracker(() => {
    Meteor.subscribe('blogs')
    // Remove comment to make current user admin
    // Meteor.subscribe('admin')
    return {
        blogs: Blogs.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
})(BlogsPage);