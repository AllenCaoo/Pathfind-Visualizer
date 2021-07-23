import {React, useState} from 'react'

const CheckBox = ({ text, id, handleCheck }) => {

    var [isChecked, toggleCheck] = useState(false);

    toggleCheck = () => {
        isChecked = !isChecked;
    }

    const handleCheckClick = (evt) => {
        toggleCheck();
        handleCheck(isChecked);
    }

    return (
        <>
            <input id={id} className="checkbox" type="checkbox" text={text} 
                onChange={ (evt) => handleCheckClick(evt) }/> 
            <label for={id}>{text}</label>
        </>
    )
}

export default CheckBox;
