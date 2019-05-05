import React from 'react'

import BlogsPage from '../pages/blogs/BlogsPage'

export default class MainContainer extends React.Component {
    render(){
        const user = Meteor.user()
        return (
            <div>
                <BlogsPage></BlogsPage>
            </div>
        )
    }
}