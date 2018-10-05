import React, { Component } from 'react';
import style from './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'


class Header extends Component {
    render() {
        return (
            <div className="b-head">
                <div className="b-head__place">
                    <div className="b-head__place-city">
                        Омск
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
                        <div className="b-button">
                            C F
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;