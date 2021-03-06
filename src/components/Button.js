import React from 'react';
import PropTypes from 'prop-types';


const Button = ( { id, color, text, onClick } ) => {
    return (
        <button id={id} style={{backgroundColor: color}} className='btn' 
            onClick={onClick}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'black', 
    text: 'Button',
    onClick: () => console.log('nothing happened'),
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
