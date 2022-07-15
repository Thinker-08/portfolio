import React from "react";
import Myphoto from "./myphoto";
const about = () => {
  return (
    <div className="flex mx-16 py-24" id="about">
      <div className="bg-white text-left flex-wrap  w-4/6 py-32 pl-10 mr-6 rounded-full">
        <p class="text-5xl text-cyan-600">Hi, I am</p>
        <p className="text-7xl text-blue-900 font-semibold">Mihir Agrawal</p>
        <p className="text-4xl text-blue-600 font-medium">
          Web Developer and Competitive Programmer
        </p>
        <p className="text-xl ">
          Future Engineer. I am currently a second-year student at NIT
          Kurukshetra who focuses on Electrical and Programming skills to solve
          modern-day problems.
        </p>
      </div>
      <div className="">
        <Myphoto width="500px" height="500px" />
      </div>
    </div>
  );
};

export default about;
