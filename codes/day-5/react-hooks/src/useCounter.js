import { useState } from "react";

const useCounter = () => {
    const [counterState, setCounterState] = useState(0)
    const increaseCounter = () => {
        setCounterState(ps => ps + 1)
    }
    return [counterState, increaseCounter];
}

export default useCounter;