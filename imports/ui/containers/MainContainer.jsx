import React from 'react'

import MainPage from '../pages/MainPage.jsx'
import NavBar from '../NavBar.jsx';

export default class MainContainer extends React.Component {
    render(){
        const user = Meteor.user()
        return (
            <div>
                <NavBar username={user.username}></NavBar>
                <MainPage></MainPage>
            </div>
        )
    }
}