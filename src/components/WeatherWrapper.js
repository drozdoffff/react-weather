import React, { Component } from 'react';
import style from './styles.scss'
import Header from './Header/Header'
import Thermometer from './Thermometer/Thermometer'
import WeatherProperties from './WeatherProperties/WeatherProerties'


class WeatherWrapper extends Component {

    state = {
        checked: false,
        icon: 'sun',
        degrees: '294',
        description: 'Ясно',
        wind: {
            speed: 5,
            deg: 150
        },
        pressure: 1011,
        humidity: 21,
    };

    onSwitchChange = () => this.setState({checked: !this.state.checked});


    render() {
        const { checked,
                pressure,
                humidity,
                wind,
                icon,
                degrees,
                description } = this.state;
        return (
            <div className="b-weather-wrapper">
                <div className='b-weather-wrapper__row'>
                    <Header
                        onSwitchChange={this.onSwitchChange}
                        checked={checked} />
                </div>
                <div className='b-weather-wrapper__thermometer'>
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

export default WeatherWrapper;