import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement,
  reset,
  incrementByAmount } from '../features/counters/counterSlice'

const Counter = () => {
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
    </div>
  )
}

export default Counter