import React from 'react'

import BlogsPage from '../pages/BlogsPage'
import NavBar from '../NavBar.jsx';

export default class MainContainer extends React.Component {
    render(){
        const user = Meteor.user()
        return (
            <div>
                <NavBar username={user ? user.username : ''}></NavBar>
                <BlogsPage></BlogsPage>
            </div>
        )
    }
}