import React from 'react'
import PropTypes from "prop-types"

function ShapeComponent({person}) {
    return (
        <div>
            <h3>Shape Component:</h3>
       <div> name: {person.name} </div>
       <div> age: {person.age} </div>
       <div> Hobby: {person.hobby} </div>
       <p>(This does not throw an error. Even though Hobby is not referenced in the proptypes, if "shape" was replaced with "exact" in line 9, then this would throw an error)</p>
       </div>
    )
}

ShapeComponent.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,       
    })
}

export default ShapeComponent
