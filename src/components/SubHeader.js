import React from 'react'

const SubHeader = ({ text, color }) => {
    return (
        <header className="subheader" style={{color: color}}>
            <h4>{text}</h4>
        </header>
    )
}

SubHeader.defaultProps = {
    color: 'black',
    text: ''
}

export default SubHeader;
