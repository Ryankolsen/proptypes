import PropTypes from 'prop-types'

function Component({ name, age }) {
    return ( 
        <div>
        <h3>Simple Component:</h3>
        
            <p>
                In 5 years {name} will be {age} years old.    
                (This will not throw any console errors, accepts number or string)
            </p>
        </div>
    )
}
Component.propTypes={
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]), 
    age: PropTypes.number.isRequired,
}

export default Component
