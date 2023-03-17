import Image from "next/image";
import React from "react";
import oxologo from "../img/oxologo1.png";
import Typewriter from "typewriter-effect";

const Job = () => {
  return (
    <div>
      <div className="text-center p-4">
        <Image src={oxologo} className="w-72 m-auto" alt="oxologo" />
        <h2 className="m-auto text-2xl mt-4">IS HIRING!</h2>
        <h1 className="text-3xl text-orange-600">
          <Typewriter
            options={{
              strings: [
                "WEB DEVELOPERS",
                "MOBILE DEVELOPERS",
                "SALESPERSONS",
                "DESIGNERS",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <a
          href="https://www.linkedin.com/company/oxo-teknoloji/jobs/"
          className="button text-orange-400 bg-blue-700 block w-32 p-3 rounded-md m-auto mt-8 mb-8 border"
          target="_blank"
        >
          Appy Now!
        </a>
      </div>
    </div>
  );
};

export default Job;
