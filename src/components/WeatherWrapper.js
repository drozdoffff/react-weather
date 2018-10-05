import React, { Component } from 'react';
import style from './styles.scss'
import Header from './Header/Header'
import Thermometer from './Thermometer/Thermometer'
import WeatherProperties from './WeatherProperties/WeatherProerties'


class WeatherWrapper extends Component {
    render() {
        return (
            <div className="b-weather-wrapper">
                <div className='b-weather-wrapper__row'>
                    <Header/>
                </div>
                <div className='b-weather-wrapper__thermometer'>
                    <Thermometer/>
                </div>
                <div className='b-weather-wrapper__row'>
                    <WeatherProperties/>
                </div>
            </div>
        );
    }
}

export default WeatherWrapper;