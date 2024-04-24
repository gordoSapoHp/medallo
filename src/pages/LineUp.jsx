import React from "react";
import Faq from "../components/Faq";

export default function LineUp() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-48">
        <h1 className="text-4xl mt-40 text-center font-bold p-5 w-[400px]">
          LINE-UP
        </h1>
        <div className="line mx-auto w-[200px] border-b-2 border-white"></div>
        <h3 className="text-xl text-center p-5">LINE-UP WILL BE ANNOUNCED SOON</h3>
      </div>
      <Faq />
    </>
  );
}
