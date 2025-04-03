import React, { useEffect, useState } from "react";
import { experiences } from "../data";

const ExperienceCard = ({ onClick, experience, isActive }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer max-w-xl relative text-center sm:mb-10"
    >
      {isActive && (
        <div className="pb-6 absolute left-0 top-0 bottom-0 w-3 bg-quaternary"></div>
      )}
      <h3
        className={`text-xl text-left lg:text-2xl xl:text-3xl font-bold sm:pl-8 ${
          isActive ? "text-tertiary" : "text-slate-300"
        }`}
      >
        {experience.title}
      </h3>
      <p
        className={`text-md text-left lg:text-lg xl:text-2xl sm:font-medium pt-2 sm:pl-8 ${
          isActive ? "text-quinary" : "text-slate-300"
        }`}
      >
        {experience.company} | {experience.date}
      </p>
    </div>
  );
};

const ExperienceDescription = ({ experience }) => {
  return (
    <div className="mt-5">
      <ul className="max-w-7xl list-none space-y-8 border-4 lg:border-8 rounded-xl lg:rounded-3xl p-6">
        {experience.description.map((point, index) => (
          <li
            key={index}
            className="text-slate-500 font-semibold text-[10px] xs:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] lg:leading-[30px]"
            dangerouslySetInnerHTML={{ __html: point }}
          />
       
        ))}
      </ul>
    </div>
  );
};
const Experience = () => {
  const [selection, setSelection] = useState(experiences[0]);

  return (
    <div class="sm:my-20">
      <h2 className="text-white font-bold text-[40px] text-center">
        Experience
      </h2>
      <div className="relative mt-10 md:mt-20 md:p-20 flex flex-col items-center sm:flex-row sm:items-start">
        <div className="flex flex-col sm:w-auto sm:w-full">
          {experiences.map((experience, index) => {
            return (
              <ExperienceCard
                key={index}
                onClick={() => setSelection(experience)}
                experience={experience}
                isActive={selection === experience}
              />
            );
          })}
        </div>
        <div className="flex justify-end sm:block hidden">
          <ExperienceDescription experience={selection} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
