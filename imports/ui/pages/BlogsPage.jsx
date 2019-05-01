import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import PropTypes from 'prop-types';

import { Blogs } from '../../api/blogs';
import Blog from './../blogs/Blog';

class BlogsPage extends React.Component {
    renderBlogs(blogs) {
        return blogs.map((blog) => <Blog key={blog._id} blog={blog}></Blog>)
    }

    render() {
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
    Meteor.subscribe('blogs');
    return {
        blogs: Blogs.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
})(BlogsPage);