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
        icon: '01',
        degrees: 0,
        description: '-',
        wind: {
            speed: 0,
            deg: 0
        },
        pressure: 0,
        humidity: 0,
        city: '-',
        data: {}
    };

    async componentDidMount() {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=55.753960&lon=37.620393&APPID=3c723b18b495d48c60953bfc19305648&lang=ru&units=imperial`);
            const json = await response.json();
            this.setState({ wind: json.wind,
                            degrees: json.main.temp,
                            description: json.weather[0].description,
                            icon: json.weather[0].icon.replace(/[^-0-9]/gim,''),
                            pressure: json.main.pressure,
                            humidity: json.main.humidity,
                            city: json.name})
        } catch (ex) {
            alert('Сервер недоступен', ex);
        }
    };

     getWeatherByCurrentCoords = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.props.coords.latitude}&lon=${this.props.coords.longitude}&APPID=3c723b18b495d48c60953bfc19305648&lang=ru&units=imperial`)
            .then(res => res.json())
            .then(json => this.setState({
                checked: true,
                wind: json.wind,
                degrees: json.main.temp,
                description: json.weather[0].description,
                icon: json.weather[0].icon.replace(/[^-0-9]/gim,''),
                pressure: json.main.pressure,
                humidity: json.main.humidity,
                city: json.name}));
    };

    onSwitchChange = () => {
        this.setState({checked: !this.state.checked});
        this.setState({degrees: this.convertDegree(this.state.degrees)});
    };

    convertDegree = (degrees) => this.state.checked ?
        Math.round((degrees - 32) * 5 / 9) :
        Math.round(degrees * 9 / 5 + 32 );

    degreesToCompass = (deg) => {
        const val = deg/90+0.5;
        const directions = ['северный', 'восточный', 'южный', 'западный'];
        return directions[`${Math.round(val)}`];
    }


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
                        city={city}
                        getGeo={this.getWeatherByCurrentCoords} />
                </div>
                <div className='b-weather-wrapper__thermometer'>
                    <Thermometer
                        icon={icon}
                        degrees={Math.round(degrees)}
                        description={description} />
                </div>
                <div className='b-weather-wrapper__row'>
                    <WeatherProperties
                        wind={`${wind.speed} м/с, ${this.degreesToCompass(wind.deg)}`}
                        pressure={`${pressure} мм рт. ст.`}
                        humidity={`${humidity}%`} />
                </div>
            </div>
        );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
})(WeatherWrapper);