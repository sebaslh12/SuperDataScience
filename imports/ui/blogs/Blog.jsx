import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

export default class Blog extends React.Component {

    deleteBlog(id) {
        if(confirm('Are you sure?'))
            Meteor.call('blogs.remove', id)
    }

    render() {
        const { _id: id, title, description } = this.props.blog
        return (
            <div className="list-group-item">
                <div className="d-flex w-100 justify-content-between">
                    <h3 className="mb-1">{title}</h3>
                    <small className="blog-description">{description}</small>
                    <button className="btn btn-xs pull-right" onClick={() => this.deleteBlog(id)}> <i className="fa fa-trash"></i> </button>
                    <Link className="btn btn-xs pull-right" to={`blog/${id}`}> <i className="fa fa-eye"></i></Link>
                    <Link className="btn btn-xs pull-right" to={`blogForm/${id}`}> <i className="fa fa-pencil"></i></Link>
                </div>
            </div>
        )
    }
}


Blog.propTypes = {
    blog: PropTypes.object.isRequired
}