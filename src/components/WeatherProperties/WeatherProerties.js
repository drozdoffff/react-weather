import React, { Component } from 'react';
import style from './styles.scss'
import { PropertyLabel } from './PropertyLabel/PropertyLabel'
import PropTypes from 'prop-types';



class WeatherProperties extends Component {

    static propTypes = {
        wind: PropTypes.string,
        pressure: PropTypes.string,
        humidity: PropTypes.string,
    };

    render() {
        const { wind,
                pressure,
                humidity } = this.props;
        return (
            <div className="b-weather-properties">
                <PropertyLabel
                label={'Ветер'}
                info={wind} />
                <PropertyLabel
                    label="Давление"
                    info={pressure} />
                <PropertyLabel
                    label="Влажность"
                    info={humidity} />
                <PropertyLabel
                    label="Вероятность дождя"
                    info="50%" />
            </div>
        );
    }
}

export default WeatherProperties;