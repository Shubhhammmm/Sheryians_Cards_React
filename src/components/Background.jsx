import React from "react";

const Background = () => {
  return (
    <>
      <div className="h-screen w-full fixed z-[2] ">
        <div className=" absolute top-[5%] w-full py-10px flex justify-center text-xinc-700 font-semibold text-xl">
        Documents
        </div>
        <h1 className=" absolute text-[14vw] tracking-tighter top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none font-semibold text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
