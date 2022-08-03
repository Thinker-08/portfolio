import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-6/6 h-auto pl-16 pt-20 pb-24 pr-8">
    <p className="text-cyan-600 font-semibold text-2xl ">My Skills</p>
      <p className="text-5xl font-semibold text-blue-900 pb-10  ">Awesome Journey</p>
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 bg-slate-300 p-12 ml-10 mr-10 pb-20 rounded-2xl shadow-lg">
        <div className="w-auto relative pb-7 ">
        <div className="flex">
        <p className="text-[1.675rem] text-start font-semibold pt-3 w-11/12 text-blue-900">C/C++</p>
        <p className="text-end font-semibold pt-8 text-blue-900">90%</p>
        </div>
          <div className="w-full bg-cyan-500 h-3 absolute rounded-2xl"></div>
          <div className="w-11/12 bg-blue-800 h-3 absolute rounded-2xl"></div>
        </div> 
        <div className="w-auto relative pb-7 ">
        <div className="flex">
        <p className="text-[1.675rem] text-start font-semibold pt-3 w-11/12 text-blue-900">Data Structures and Algorithms</p>
        <p className="text-end font-semibold pt-8  text-blue-900">90%</p>
        </div>
            <div className="w-full bg-cyan-500 h-3 absolute rounded-2xl"></div>
            <div className="w-11/12 bg-blue-800 h-3 absolute rounded-2xl"></div>
        </div> 
        <div className="w-auto relative  pb-7 ">
        <div className="flex">
        <p className="text-[1.675rem] text-start font-semibold pt-3 w-11/12 text-blue-900">MERN Full Stack Developer</p>
        <p className="text-end font-semibold pt-8  text-blue-900">80%</p>
        </div>
            <div className="w-full bg-cyan-500 h-3 absolute rounded-2xl"></div>
            <div className="w-10/12 bg-blue-800 h-3 absolute rounded-2xl"></div>
        </div> 
        <div className="w-auto relative pb-7 ">
        <div className="flex">
        <p className="text-[1.675rem] text-start font-semibold pt-3 w-11/12 text-blue-900">Python</p>
        <p className="text-end font-semibold pt-8  text-blue-900">60%</p>
        </div>
            <div className="w-full bg-cyan-500 h-3 absolute rounded-2xl"></div>
            <div className="w-7/12 bg-blue-800 h-3 absolute rounded-2xl"></div>
        </div> 
        <div className="w-auto relative pb-7 ">
        <div className="flex">
        <p className="text-[1.675rem] text-start font-semibold pt-3 w-11/12 text-blue-900">JavaScript</p>
        <p className="text-end font-semibold pt-8  text-blue-900">70%</p>
        </div>
            <div className="w-full bg-cyan-500 h-3 absolute rounded-2xl"></div>
            <div className="w-9/12 bg-blue-800 h-3 absolute rounded-2xl"></div>
        </div> 
        <div className="w-auto relative pb-7 ">
        <div className="flex">
        <p className="text-[1.675rem] text-start font-semibold pt-3 w-11/12 text-blue-900">NoSQL</p>
        <p className="text-end font-semibold pt-8  text-blue-900">70%</p>
        </div>
            <div className="w-full bg-cyan-500 h-3 absolute rounded-2xl"></div>
            <div className="w-9/12 bg-blue-800 h-3 absolute rounded-2xl"></div>
        </div> 
      </div>
    </div>
  );
};

export default Skills;
