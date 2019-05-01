import { Meteor } from 'meteor/meteor'
import React from 'react'


export default class BlogFormPage extends React.Component {
    state = {
        error: ''
    }
    handleSubmit(e) {
        e.preventDefault()
        const blogTitle = e.target.blogTitle.value
        const blogDescription = e.target.blogDescription.value

        if (blogTitle.trim()) {
            Meteor.call('blogs.insert', blogTitle, blogDescription, (err, res) => {
                if (err) {
                    this.setState({
                        error: err
                    })
                }
                else {
                    this.props.history.push('/')
                }
            })
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
                                    <input className="form-control" type="text" name="blogTitle" placeholder="Blog Title" />

                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="blogDescription" placeholder="Blog Description"></textarea>
                                </div>
                                <div className="form-group text-center">
                                    <button className="btn btn-success btn-lg btn-block">Create Blog</button>
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