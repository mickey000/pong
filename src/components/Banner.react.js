import React, { Component } from 'react';

class Banner extends Component {

    render() {
        const { message } = this.props;

        return (
            <div className="banner-wrapper">
                <div className="banner">
                    <p className="message">{message}</p>
                </div>
            </div>
        );
    }
}

export default Banner;
