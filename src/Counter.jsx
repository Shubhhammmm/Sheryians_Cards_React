import React, { useState } from "react";
import BG from "./BG";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const[like , setLike] = useState(0)
  const[dislike , setdislike] = useState(0)

  const increase = () => {
    if (counter < 20) {
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    } else {
      setCounter(0);
      alert(`can't go beyond 20`);
    }
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert(`can't go beyond 0`);
    }
  };

  const Likes =()=>{
      setLike(like + 1)
  }

  const dislikes = () =>{
    setdislike(dislike + 1)
  }

  return (
    <>
      <h1 className="text-center text-xl font-serif text-white bg-blue-900">
        Sheriyan React
      </h1>

      <br />

      <h1
        className="rounded-md bg-green-100"
        style={{ color: counter > 0 ? "green" : "red" }}
      >
        {" "}
        {counter}{" "}
      </h1>

      <button
        className="text-center justify-center rounded-md bg-blue-400"
        onClick={increase}
      >
        {" "}
        increase{" "}
      </button>

      <button
        className="text-center space-x-2 bg-red-400 rounded-md"
        onClick={decrease}
      >
        decrease
      </button>
      <br/>

      <button className="text-center rounded-md bg-yellow-500 space-x-5 gap-x-2 " onClick={Likes}>Like : {like} </button>
      <button onClick={dislikes}> Dislike : {dislike} </button>

      <BG/>
    </>
  );
};

export default Counter;

