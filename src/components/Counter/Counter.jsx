import React, { useContext } from 'react';
import { counterContext } from '../../counterContext';

const Counter = () => {
    const {counter, decrement, increment} = useContext(counterContext); //вернет объект

  return (
    <div>
        <button onClick={decrement}>-1</button>
        <h2>{counter}</h2>
        <button onClick={increment}>+1</button>
    </div>
  )
}

export default Counter