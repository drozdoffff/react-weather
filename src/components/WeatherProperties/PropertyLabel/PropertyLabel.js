import React from 'react'
import style from './styles.scss'
import PropTypes from 'prop-types';

export const PropertyLabel = ({label = 'Name', info = '0', ...props}) =>
    <div className="b-weather-properties__item">
        <div className="b-weather-properties__item-label">{label}</div>
        <div className="b-weather-properties__item-info">{info}</div>
    </div>;

PropertyLabel.propTypes = {
    label: PropTypes.string,
    info: PropTypes.string
};