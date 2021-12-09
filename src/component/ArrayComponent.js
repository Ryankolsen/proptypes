import React from 'react'
import PropTypes from "prop-types"

function ArrayComponent({array}) {
    
    return ( 
    
        <div>
            <h3>Array Component Example</h3>
            <div>First Item: {[array[0]]} (No Error)</div> 
            <div> Second Item: {[array[1]]} (This item will throw an error b/c it is the wrong PropType) </div>
        </div>
      )
}

ArrayComponent.propTypes= {
    array: PropTypes.arrayOf(PropTypes.number),
}

export default ArrayComponent

