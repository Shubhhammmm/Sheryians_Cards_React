import React from "react";
import "../index.css";
import Background from "./Background";
import ForeGround from "./ForeGround";

const Apps = () => {
  return (
    <>
      <div className="relative h-screen w-screen bg-zinc-800">
        <Background />
        <ForeGround />
      </div>
    </>
  );
};

export default Apps;
