import React from 'react';
import Button from './Button';
import CheckBox from './CheckBox';

const Controls = ({blueClick, redClick, greenClick, checkClick}) => {
    return (
        <span className="span-control">
            {/* <Button color='purple' text="Change Start"/> 
            <Button color='purple' text="Change End"/> */}  {/* To be deployed later*/}
            <Button id="blue-control" color='blue' text="Clear Display" onClick={ blueClick } />
            <Button id="red-control" color='red' text="Clear All" onClick={ redClick } />
            <Button id="green-control" color='green' text="Run" onClick={ greenClick } />
            <CheckBox id="show-display" text="Fancy Graphics (may reduce performance)"
                handleCheck={ checkClick } />
        </span>
    )
}

export default Controls
