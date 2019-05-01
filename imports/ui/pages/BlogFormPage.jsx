import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react'
import PropTypes from 'prop-types'

import { Blogs } from '../../api/blogs';



class BlogFormPage extends React.Component {
    constructor(props) {
        super(props)
        this.getBlog = this.getBlog.bind(this)
        this.blog = this.getBlog()
    }

    state = {
        error: ''
    }
    
    getBlog = () => {
        const blogs = this.props.blogs
        this.id = this.props.match.params.id
        if (this.id) {
            return blogs.find((blog) => blog._id === this.id)
        }
    }

    handleSubmit(e) {
        e.preventDefault()

        const blogTitle = e.target.blogTitle.value
        const blogDescription = e.target.blogDescription.value

        if (blogTitle.trim()) {
            if (this.id)
                Meteor.call('blogs.update', this.id, blogTitle, blogDescription)
            else
                Meteor.call('blogs.insert', blogTitle, blogDescription)
            this.props.history.push('/blog')
        } else {
            this.setState({
                error: 'Title is required'
            })
        }

    }

    render() {
        const error = this.state.error;
        return (
            <div className="modal show">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1>Create New Blog</h1>
                        </div>
                        <div className="modal-body">
                            {error.length > 0 ?
                                <div className="alert alert-danger fade in">{error}</div>
                                : ''}
                            <form className="form col-md-12 center block" onSubmit={this.handleSubmit.bind(this)}>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="blogTitle" placeholder="Blog Title" defaultValue={this.blog ? this.blog.title : ''} />

                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="blogDescription" placeholder="Blog Description" defaultValue={this.blog ? this.blog.description : ''}></textarea>
                                </div>
                                <div className="form-group text-center">
                                    <button className="btn btn-success btn-lg btn-block">{this.id ? 'Update blog' : 'Create blog'}</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer"></div>
                    </div>

                </div>
            </div>
        )
    }
}

BlogFormPage.propTypes = {
    blog: PropTypes.object
}

export default withTracker(() => {
    Meteor.subscribe('blogs');
    return {
        blogs: Blogs.find().fetch(),
    };
})(BlogFormPage);