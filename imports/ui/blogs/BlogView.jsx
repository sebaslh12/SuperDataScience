import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react'
import PropTypes from 'prop-types'

import { Blogs } from '../../api/blogs';

class BlogView extends React.Component {

    getBlog() {
        const blogs = this.props.blogs
        const id = this.props.match.params.id

        const blog = blogs.find((blog) => blog._id === id)
        if (blog)
            return blog
        else
            this.props.history.push('/')
    }

    render() {
        const blog = this.getBlog()
        return (
            <div>
                <div className="card">
                    <h3 className="card-header">
                        {blog.blogTitle}
                    </h3>
                    <div className="card-body">
                        <p className="card-text">
                            {blog.blogDescription}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTracker(() => {
    Meteor.subscribe('blogs');
    return {
        blogs: Blogs.find().fetch(),
    };
})(BlogView);