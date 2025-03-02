import React, { useRef, useState } from "react";
import { Data1 } from "../Data/Nike";
import { increment } from "../featuers/counter/counterSlice";
import { addTask } from "../featuers/todo/toDo";
import { useDispatch, useSelector } from "react-redux";
import { HiMiniXMark } from "react-icons/hi2";

function Nike() {
  const Cart = useSelector((state) => state.todo.task);
  const dispatch = useDispatch();
  const [Data, setData] = useState({});
  const [count, setCount] = useState(0);

  const overlayDataPass = (data) => {
    setData(data);
    setCount(count + 1);
  };

  const number = () => {
    dispatch(increment());
  };

  const sendCardData = (el) => {
    dispatch(
      addTask({ name: el.name, price: el.MRP, id: el.id, src: el.source })
    );
    console.log(el);
  };

  const cardDetails = (el) => {
    number();
    sendCardData(el);
  };

  return (
    <>
      <h1>NIKE</h1>
      <div className="grid grid-cols-4 justify-center items-center gap-[5%] m-16 h-[50vh]">
        {Data1.map((el, i) => {
          return (
            <>
              <div
                key={i}
                className="card p-5 w-80 h-80 bg-slate-600  rounded-xl cursor-pointer"
                onClick={() => overlayDataPass(el)}
              >
                <img src={el.source} alt="" />
                <h1>{el.name}</h1>
                <span>{el.MRP}</span>
                <button onClick={() => cardDetails(el)}>Add to cart</button>
              </div>
            </>
          );
        })}
      </div>

      <div
      // overlay ${
      //   count > 0 ? "block" : "hidden"
      // } 
        
      >
        {/* <HiMiniXMark
          className="text-6xl ml-auto cursor-pointer"
          onClick={() => {
            setCount(count - 1);
          }}
        /> */}
        {Data && (
          <>
            <div className= {` overlay ${
        count > 0 ? "block" : "hidden"
      }  w-[90%] m-5 flex gap-20`}
             key={Data.id}>
              <img
                src={Data.source}
                alt=""
                className="w-[40%] h-[40%] rounded-xl m-5 shadow-amber-100 shadow-md"
              />
              <div className="h-[50vh] w-[2px] bg-white">.</div>
              <div className="flex flex-col gap-10 text-xl ml-10">
                <h1>{Data.name}</h1>
                <div>
                  discription : <p>{Data.discription}</p>
                </div>
                <div>
                  price : <span>{Data.MRP}</span>
                </div>
                <div className="flex">
                  <button>Buy now</button>
                  <button onClick={() => cardDetails(Data)}>Add to cart</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Nike;
