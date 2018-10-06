import React, { Component } from 'react';
import style from './styles.scss'
import PropTypes from 'prop-types';

function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));


class Thermometer extends Component {

    static propTypes = {
        checked: PropTypes.bool,
        onSwitchChange: PropTypes.func
    };

    render() {
        const { icon = 'sun',
                degrees = 9,
                description = 'Преимущественно солнечно' } = this.props;
        return (
            <div className="b-thermometer">
                <div className="b-thermometer__icon">
                    <img src={images[`${icon}.svg`]} />
                </div>
                <div className="b-thermometer__degrees">
                    {degrees}°
                </div>
                <div className="b-thermometer__description">
                    {description}
                </div>

            </div>
        );
    }
}

export default Thermometer;