import React from "react";
import { GiFiles } from "react-icons/gi";
import { RiDownloadCloudFill } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";

const Card = ({ data }) => {
  return (
    <>
      <div className=" flex-shrink-0 relative w-60 h-72 px-8 py-10 bg-sky-900 rounded-[40px] text-white  overflow-hidden">
        <GiFiles />
        <p className="text-sm mt-5 font-semibold leading-tight ">{data.desc}</p>

        <div className="footer absolute bottom-0 left-0 w-full  py-3">
          <div>
            <h6 className="px-8 h-7  items-center justify-center mb-[60px] bottom-0 absolute left-0">
              0.4Mb
            </h6>
            <span className="px-8 h-6 rounded-full items-center justify-center mb-[55px] absolute right-0 bottom-0 ">
              {data.close ? (
                <IoIosCloseCircle />
              ) : (
                <RiDownloadCloudFill size=".8rem" />
              )}
            </span>
          </div>

          {data.tag.isOpen && (
            <div className = {`flex items-center justify-center tag w-full py-4 bg-green-600  `}>
              <h3 className="text-sm font-semibold ">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
