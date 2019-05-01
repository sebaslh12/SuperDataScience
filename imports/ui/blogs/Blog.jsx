import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

export default class Blog extends React.Component {

    deleteBlog(id){
        Meteor.call('blogs.remove', id)
    }

    render() {
        const { _id: id, blogTitle, blogDescription } = this.props.blog
        return (
            <p>
                {blogTitle} {blogDescription}
                <button onClick={() => this.deleteBlog(id)}>X</button>
                <Link className="btn btn-info" to={`/blog/${id}`}>Show</Link>
            </p >
        )
    }
}


Blog.propTypes = {
    blog: PropTypes.object.isRequired
}