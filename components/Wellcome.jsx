import React from "react";
import oxologo from "../img/oxologo1.png";

const Wellcome = () => {
  return (
    <div className="flex items-center justify-center h-[85vh] bg-fixed bg-center bg-cover custom-img">
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-[15vh] bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[8rem] mr-16">
        <h2 className="text-5xl font-bold">OXO TECHNOLOGY</h2>
        <p className="py-5 text-xl">Here to Help</p>
        <button className="px-8 py-2 border">Contact</button>
      </div>
    </div>
  );
};

export default Wellcome;
