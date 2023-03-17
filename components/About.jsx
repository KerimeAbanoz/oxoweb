import Image from "next/image";
import React from "react";
import firm from "../img/firm.png";

const About = () => {
  return (
    <div>
      <div id="about" className="bg-gray-100 p-11">
        <div className="flex flex-wrap gap-4 mb-4 justify-center">
          <Image src={firm} alt="firm" width="100" />
          <Image src={firm} alt="firm" width="100" />
          <Image src={firm} alt="firm" width="100" />
          <Image src={firm} alt="firm" width="100" />
          <Image src={firm} alt="firm" width="100" />
        </div>
        <div className="">
          <h1  className="text-4xl font-bold text-center">WHO WE ARE?</h1>

          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            debitis obcaecati mollitia a laudantium sunt rem voluptatem illum
            assumenda. Reprehenderit assumenda quasi voluptates aut iure eaque.
            Ipsum tenetur dolorem aperiam esse error rem consectetur minus eius,
            repellendus atque. culpa animi
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
