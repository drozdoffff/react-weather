import React from 'react'
import style from './styles.scss'
import PropTypes from 'prop-types';

export const DegreeSwitch = ({checked = false, ...props}) =>
    <div className="b-degree-switch">
        <label className='toggle-label'>
            <input type='checkbox' checked={checked} onChange={props.onChange} />
            <span className='back'>
		        <span className='toggle'/>
 		        <span className='label on'>C</span>
		        <span className='label off'>F</span>
	        </span>
        </label>
    </div>;

DegreeSwitch.propTypes = {
    checked: PropTypes.bool
};