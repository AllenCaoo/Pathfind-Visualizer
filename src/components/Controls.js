import React from 'react';
import Button from './Button';
import CheckBox from './CheckBox';

const Controls = ({blueFunc, redFunc, greenFunc, checkFunc}) => {
    return (
        <span className="span-control">
            {/* <Button color='purple' text="Change Start"/> 
            <Button color='purple' text="Change End"/> */}  {/* To be deployed later*/}
            <Button color='blue' text="Clear Display" onClick={ blueFunc } />
            <Button color='red' text="Clear All" onClick={ redFunc } />
            <Button color='green' text="Run" onClick={ greenFunc } />
            <CheckBox id="show-display" text="Fancy Graphics (may reduce performance)"
                handleCheck={ checkFunc } />
        </span>
    )
}

export default Controls
