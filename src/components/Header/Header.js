import React, { Component } from 'react';
import style from './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { DegreeSwitch } from '../Buttons/DegreeSwitch'
import PropTypes from 'prop-types';

class Header extends Component {

    static propTypes = {
        checked: PropTypes.bool,
        onSwitchChange: PropTypes.func,
        city: PropTypes.string
    };

    render() {
        const { checked,
                onSwitchChange,
                city } = this.props;
        return (
            <div className="b-head">
                <div className="b-head__place">
                    <div className="b-head__place-city">
                        {city}
                    </div>
                    <div className="b-head__place-change">
                        Сменить город
                    </div>
                    <div className="b-head__place-current">
                        <FontAwesomeIcon icon={faLocationArrow} />
                        Мое местоположение
                    </div>
                </div>
                <div className="b-head__switcher">
                    <div className="b-head__switcher-degree">
                        °
                    </div>
                    <div className="b-head__switcher-button">
                        <DegreeSwitch
                            checked={checked}
                            onChange={onSwitchChange} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;