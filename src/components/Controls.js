import React from 'react'
import Button from './Button'

const Controls = ({clearDisplay, clearAll, handleOnClickRun}) => {
    return (
        <span className="span-control">
            {/* <Button color='purple' text="Change Start"/> 
            <Button color='purple' text="Change End"/> */}  {/* To be deployed later*/}
            <Button color='blue' text="Clear Display" onClick={clearDisplay} />
            <Button color='red' text="Clear All" onClick={clearAll} />
            <Button color='green' text="Run" onClick={() => {
                handleOnClickRun();}
            }/>
        </span>
    )
}

export default Controls
