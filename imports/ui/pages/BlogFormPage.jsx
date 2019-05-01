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
                error:'Title is required'
            })
        }

    }

    render() {
        const error = this.state.error;
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    {error.length > 0 ?
                        <div className="alert alert-danger fade in">{error}</div>
                        : ''}
                    <input type="text" name="blogTitle" placeholder="Blog Title" />
                    <textarea name="blogDescription" placeholder="Blog Description"></textarea>
                    <button>Create Blog</button>
                </form>
            </div>
        )
    }
}