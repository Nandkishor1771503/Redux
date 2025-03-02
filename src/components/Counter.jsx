import React from "react";

import { increment, decrement, reset } from "../featuers/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return <>
  
    <div>{count}</div>
          <button
            onClick={() => {
              dispatch(increment());
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(reset());
            }}
          >
            reset
          </button>
  

  </>;
}

export default Counter
