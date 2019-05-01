import React from 'react';

import MainContainer from './MainContainer.jsx';

export default class AppContainer extends React.Component {
    
    state = this.getMeteorData();
    

    getMeteorData() {
        return { isAuthenticated: Meteor.userId() !== null };
    }

    componentWillMount() {
        if (!this.state.isAuthenticated) {
            this.props.history.push('/login');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.state.isAuthenticated) {
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <MainContainer />
        );
    }
}