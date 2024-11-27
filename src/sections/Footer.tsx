"use client";
import Image from "next/image";
import { RefObject, useEffect, useRef } from "react";

export const Footer = ({referenceToTheFooter}:{referenceToTheFooter:RefObject<HTMLDivElement>}) => {
 

  return (
    <div className="w-full h-full z-10 absolute bottom-0 left-0" ref={referenceToTheFooter}>
      <div className="board absolute bottom-0 z-20 min-w-max min-h-max !h-[200px] !w-[300px] md:!h-[250px] md:!w-[350px] lg:!h-[300px] lg:!w-[400px]" >
        <Image
          src="/board5.png"
          id="board"
           // `animate-pop-out` class will be added here
          alt="some image"
          fill={true}
        
          className="!w-full !h-full"
          
        />
      </div>
    </div>
  );
};
