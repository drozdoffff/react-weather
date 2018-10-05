import React, { Component } from 'react';
import style from './styles.scss'


class Thermometer extends Component {
    render() {
        return (
            <div className="b-thermometer">
                <div className="b-thermometer__icon">
                    icon
                </div>
                <div className="b-thermometer__degrees">
                    degrees
                </div>
                <div className="b-thermometer__description">
                    description
                </div>

            </div>
        );
    }
}

export default Thermometer;