import React, { Component } from 'react';
import style from './styles.scss'
import Header from './Header/Header'
import Thermometer from './Thermometer/Thermometer'
import WeatherProperties from './WeatherProperties/WeatherProerties'
import {geolocated, geoPropTypes} from 'react-geolocated';
import PropTypes from 'prop-types';


class WeatherWrapper extends Component {

    static propTypes = {...WeatherWrapper.propTypes, ...geoPropTypes};

    state = {
        checked: true,
        icon: 'sun',
        degrees: 294,
        description: 'Ясно',
        wind: {
            speed: 5,
            deg: 150
        },
        pressure: 1011,
        humidity: 21,
        city: 'Омск'
    };

    onSwitchChange = () => {
        this.setState({checked: !this.state.checked});
        this.setState({degrees: this.convertDegree(this.state.degrees)});
    };

    convertDegree = (degrees) => this.state.checked ?
        Math.round((degrees - 32) * 5 / 9) :
        Math.round(degrees * 9 / 5 + 32 );

    render() {
        const { checked,
                pressure,
                humidity,
                wind,
                icon,
                degrees,
                description,
                city } = this.state;
        return (
            <div className="b-weather-wrapper">
                <div className='b-weather-wrapper__row'>
                    <Header
                        onSwitchChange={this.onSwitchChange}
                        checked={checked}
                        city={city}/>
                </div>
                <div className='b-weather-wrapper__thermometer'>
                    {!this.props.isGeolocationAvailable
                        ? <div>Your browser does not support Geolocation</div>
                        : !this.props.isGeolocationEnabled
                            ? <div>Geolocation is not enabled</div>
                            : this.props.coords
                                ? <table>
                                    <tbody>
                                    <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
                                    <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
                                    </tbody>
                                </table>
                                : <div>Getting the location data&hellip; </div>}
                    <Thermometer
                        icon={icon}
                        degrees={degrees}
                        description={description} />
                </div>
                <div className='b-weather-wrapper__row'>
                    <WeatherProperties
                        wind={`${wind.speed} м/с, ${wind.deg}`}
                        pressure={`${pressure} мм рт. ст.`}
                        humidity={`${humidity}%`} />
                </div>
            </div>
        );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(WeatherWrapper);