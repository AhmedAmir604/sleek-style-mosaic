import React from "react";
import { SiNike } from "react-icons/si";

export default function VerticalBar() {
  return (
    <section className=" fixed left-0 top-0 h-full w-fit flex justify-center items-center bg-[#ccd6e2] px-6 ml-3 my-2">
      <SiNike className="text-black text-4xl mr-5 absolute top-10 left-3" />
      <div className="transform rotate-90 text-sm -mx-[8rem] italic text-black tracking-ultraWide">
        STYLE TAKES OVER
      </div>
    </section>
  );
}
