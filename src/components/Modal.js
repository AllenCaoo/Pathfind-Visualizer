import React from 'react';
import Button from './Button';

const Modal = ( { buttonId, buttonColor, buttonText, buttonOnClick, modalContent} ) => {
    return (
        <>
        <Button id={buttonId} color={buttonColor} text={buttonText} 
            onClick={buttonOnClick} />
        <div>
            {modalContent}
        </div>
        </>
    )
}



export default Modal;
