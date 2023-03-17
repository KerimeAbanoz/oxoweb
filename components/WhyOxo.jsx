import Image from "next/image";
import React from "react";
import why from "../img/why.jpeg";

const WhyOxo = () => {
  return (
    <div className="pt-8 bg-gray-100 ">
      <h1 className="text-4xl font-bold text-center mb-4">WHY OXO?</h1>
      <div className=" ml-8">
        <p>
          Many companies face challenges with finding vetted specialists. Our
          unique solution for hiring self-managed experts addresses all of these
          concerns.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 mb-4">
          <ul>
            <li className="mb-4">
              <h1 className="text-2xl text-orange-500">Professional</h1>
              <p className="ml-8">
                Experts are chosen for their deep knowledge and successful track
                record.
              </p>
            </li>
            <li className="mb-4">
              <h1 className="text-2xl text-orange-500">Teammates</h1>
              <p className="ml-8">
                Experts are screened on their soft skills to ensure they are
                amazing teammates.
              </p>
            </li>
            <li className="mb-4">
              <h1 className="text-2xl text-orange-500">Self-managed</h1>
              <p className="ml-8">
                Our self-organized agile teams ensure eﬀectiveness and project
                success.
              </p>
            </li>
            <li className="mb-4">
              <h1 className="text-2xl text-orange-500">Financial control</h1>
              <p className="ml-8">
                We bring the knowledge and experience you need without the cost
                and commitment of a full-time employee, so you can stay on
                track.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyOxo;
