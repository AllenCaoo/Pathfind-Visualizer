import React from 'react'

const CheckBox = ({ text, id }) => {
    return (
        <>
            <input id={id} type="checkbox" text={text} /> 
            <label for={id}>{text}</label>
        </>
    )
}

export default CheckBox
