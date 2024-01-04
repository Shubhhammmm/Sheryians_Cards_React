import React from "react";
import Card from "./Card";

const ForeGround = () => {

  const data = [
    {
      desc : "Lorem Ipsumns Stack Developer intern at Innover Labs",
      fileSize : ".9mb",
      close : true,
      tag : {isOpen : true, tagTitle :  "Download Now" , tagColor: "green" }
    },
    {
      desc : "Lorem Ipsumns Stack Developer intern at Innover Labs",
      fileSize : ".9mb",
      close : true,
      tag : {isOpen : true, tagTitle :  "Download Now" , tagColor: "green" }
    },
    {
      desc : "Lorem Ipsumns Stack Developer intern at Innover Labs",
      fileSize : ".9mb",
      close : true,
      tag : {isOpen : true, tagTitle :  "Download Now" , tagColor: "green" }
    },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 z-[3]  w-full h-full flex gap-10 flex-wrap p-5 ">
        
       {data.map((item , id) =>(
          <Card data={item}  key={id} />
       
       ))}


      </div>
    </>
  );
};

export default ForeGround;
