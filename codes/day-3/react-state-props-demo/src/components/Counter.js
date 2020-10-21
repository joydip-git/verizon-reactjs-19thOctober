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
const CounterOriginal = (props, refObjRef) => {
    const inputRef = React.createRef();
    const updateCount = () => {
        // console.log(inputRef.current.value)
        // inputRef.current.focus()
        props.changeCounter(parseInt(inputRef.current.value))
    }
    // const focusInput = () => {
    //     inputRef.current.focus();
    // }
    return (
        <div>
            Counter Value:&nbsp;{props.count}
            <br />
            Enter Value:&nbsp;
            <input
                type='text'
                ref={inputRef}
            />
            <br />
            <button onClick={updateCount}>Update Count</button>
            <br />
            Another Input:&nbsp;<input
                type='text'
                ref={refObjRef}
            />
        </div>
    )
}
CounterOriginal.propTypes = {
    count: PropTypes.number.isRequired,
    changeCounter: PropTypes.func.isRequired
}
const Counter = React.forwardRef(CounterOriginal)
export default Counter
