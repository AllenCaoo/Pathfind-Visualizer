import React from 'react'
import Button from './Button'
import AlgorithmSelect from './AlgorithmSelect'
import Slider from './Slider'

const Settings = () => {
    return (
        <div>
            <AlgorithmSelect />
            <Button color='green' text="Run"/>
        </div>
    )
}

export default Settings
