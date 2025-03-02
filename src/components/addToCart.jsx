import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../featuers/counter/counterSlice";
import { addTask, removeTask, clearTask } from "../featuers/todo/toDo";

function Cart() {
  const newTask = useSelector((state) => state.todo.task);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const dispatchCount = useDispatch();
  const inputRef = useRef("");

  return (
    <>
      <h1> No of Items : {count}</h1>

      <button
        onClick={() => {
          dispatch(clearTask());

          dispatchCount(reset());
        }}
      >
        Clear all
      </button>
      <div className="taskDiaplay grid grid-cols-4 gap-10">
        {newTask.map((e, i) => {
          return (
            <div
              key={e.id}
              className="card p-5 w-80 h-80 bg-slate-600  rounded-xl"
            >
              <img src={e.src} alt="" />
              <h1>{e.name}</h1>
              <span>price : {e.price}</span>
              <button
                onClick={() => {
                  dispatch(removeTask(i));
                  dispatchCount(decrement());
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
