import React from 'react'
import PropTypes from 'prop-types'

/*
class Counter extends Component {
    static propTypes = {
        count: PropTypes.number.isRequired
    }
    render() {
        return (
            <div>

            </div >
        )
    }
}

// Counter.propTypes = {
//     count: PropTypes.number.isRequired
// }
*/
const Counter = (props) => {
    return (
        <div>
            Counter Value:&nbsp;
            <input
                type='text'
                value={props.count}
                onChange={(e) => props.changeCounter(parseInt(e.target.value))}

            />
            <br />
            {/* <button>Update Count</button> */}
        </div>
    )
}
Counter.propTypes = {
    count: PropTypes.number.isRequired,
    changeCounter: PropTypes.func.isRequired
}
export default Counter
