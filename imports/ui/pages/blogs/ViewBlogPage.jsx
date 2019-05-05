import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react'
import PropTypes from 'prop-types'

import { Blogs } from '../../../api/blogs';

class ViewBlogPage extends React.Component {
    blog = null

    getBlog() {
        const blogs = this.props.blogs
        const id = this.props.match.params.id

        const blog = blogs.find((blog) => blog._id === id)
        if (blog)
            return blog
        else
            this.props.history.push('/blog')
    }

    render() {
        this.blog = this.getBlog()
        return (
            <div>
                {
                    this.blog ?
                        <div className="card">
                            <h3 className="card-header">
                                {this.blog.title}
                            </h3>
                            <div className="card-body">
                                <p className="card-text">
                                    {this.blog.description}
                                </p>
                            </div>
                        </div> : ''
                }
            </div>
        )
    }
}

export default withTracker(() => {
    Meteor.subscribe('blogs');
    return {
        blogs: Blogs.find().fetch(),
    };
})(ViewBlogPage);