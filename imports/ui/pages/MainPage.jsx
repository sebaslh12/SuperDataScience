import React from 'react';
import PropTypes from 'prop-types';

export default class MainPage extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Blogs will appear here</h1>
                </div>
            </div>
        );
    }
}

MainPage.propTypes = {
    username: PropTypes.string
}
