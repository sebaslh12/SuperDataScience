import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

export default class Blog extends React.Component {

    deleteBlog(id) {
        Meteor.call('blogs.remove', id)
    }

    render() {
        const { _id: id, blogTitle, blogDescription } = this.props.blog
        return (
            <Link className="list-group-item" to={`blog/${id}`}>
                <div className="d-flex w-100 justify-content-between">
                    <h3 className="mb-1">{blogTitle}</h3>
                    <small className="blog-description">{blogDescription}</small>
                    <button className="btn btn-xs pull-right btn-danger" onClick={() => this.deleteBlog(id)}>X</button>
                </div>
            </Link>
        )
    }
}


Blog.propTypes = {
    blog: PropTypes.object.isRequired
}