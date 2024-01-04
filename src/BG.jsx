import React, { useState } from 'react'

const BG = () => {

    const[color , setColor] = useState("olive")

  return (
    <>

    <h1 style={{background : color}} >BackGround CHanger</h1>

    <button className=" font-semibold outline-none px-2 py-1 rounded-md shadow-lg text-red-800 bg-red-500 "  onClick={()=>setColor("red")}>Red</button>

    <button className=" font-semibold outline-none px-2 py-1 rounded-md shadow-lg text-green-800 bg-green-500 " onClick={()=>setColor("green")}>Green</button>

    <button onClick={()=>setColor("yellow")}>yellow</button>

    <button onClick={()=>setColor("brown")}>brown</button>

    <button onClick={()=>setColor("gold")}>gold</button>

    <button onClick={()=>setColor("grey")}>grey</button>


      
    </>
  )
}

export default BG

// import React, { useState } from 'react'

// const BG = () => {

//     const[color , setColor] = useState("olive")

//   return (
//     <>
//     <div className="w-full h-screen duration-200" 
//     style={{backgroundColor : color}}
//     >
//     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    
//     <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-1 rounded-3xl"> 
//     <button className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}
//     onClick={() => setColor("red")} >Red</button>

//     <button className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}} onClick={() => setColor("green")} >Green</button>

//     <button className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")} >Blue</button>

//     <button className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "brown"}} onClick={() => setColor("brown")} >Brown</button>

//     <button className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>

//     <button className="outline-none px-2 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "orange"}} onClick={() => setColor("orange")} >Orange</button>
    
//     </div>

//     </div>

//     </div>
      
//     </>
//   )
// }

// export default BG





