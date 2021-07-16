import React from 'react'

const Slider = () => {
    return (
        <>
            <input type="range" min="1" max="100" value="50" class="slider" id="speed"></input>
            <label for="speed">Speed</label>
        </>
    )
}

export default Slider
