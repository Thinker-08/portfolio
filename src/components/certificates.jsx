import React from "react";

const certificates = () => {
  return (
    <div id="certificates" className="pl-16 pt-16 pr-8 mb-32 h-screen ">
      <p className="text-cyan-600 font-semibold text-2xl">My Certifications</p>
      <p className="text-5xl font-semibold text-blue-900 pb-14">
        Additional Courses
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 ">
        <div className="hover:scale-105  transition ease-in-out delay-50 duration-500 w-full h-16 rounded-lg  pt-10 pb-32 hover:bg-slate-300 hover:h-64 hover:pt-16">
          <p className="text-blue-800 text-3xl font-bold">
            Qualified and Completed
          </p>
          <p className="text-xl font-semibold">Amazon ML Summer School'22</p>
        </div>
        <div className="hover:scale-110 transition ease-in-out delay-50 duration-500 w-full h-16 rounded-lg  pt-10 pb-32 hover:bg-slate-300 hover:h-64 hover:pt-16">
          <p className="text-blue-800 text-3xl font-bold">Qualified</p>
          <p className="text-xl font-semibold">30 Days of Google Cloud '21</p>
        </div>
        <div className="hover:scale-110 transition ease-in-out delay-50 duration-500 w-full h-16 rounded-lg  pt-10 pb-32 hover:bg-slate-300 hover:h-64 hover:pt-16">
          <p className="text-blue-800 text-3xl font-bold">Completed</p>
          <p className="text-xl font-semibold text-center">The Complete 2022</p>
          <p className="text-xl font-semibold text-center">
            Web Development Bootcamp
          </p>
        </div>
        <div className="hover:scale-110 transition ease-in-out delay-50 duration-500 w-full h-16 rounded-lg  pt-10 pb-32 hover:bg-slate-300 hover:h-64 hover:pt-16">
          <p className="text-blue-800 text-3xl font-bold">Qualified</p>
          <p className="text-xl font-semibold">
            Pre-Elimination Round of Global Programming Competition
          </p>
        </div>
        <div className="hover:scale-110 transition ease-in-out delay-50 duration-500 w-full h-16 rounded-lg  pt-10 pb-32 hover:bg-slate-300 hover:h-64 hover:pt-16">
          <p className="text-blue-800 text-3xl font-bold">Completed</p>
          <p className="text-xl font-semibold">
            Competitive Programmer's Core Skills
          </p>
        </div>
        <div className="hover:scale-110 transition ease-in-out delay-50 duration-500 w-full h-16 rounded-lg  pt-10 pb-32 hover:bg-slate-300 hover:h-64 hover:pt-16">
          <p className="text-blue-800 text-3xl font-bold">Completed</p>
          <p className="text-xl font-semibold">Algorithmic ToolBox</p>
        </div>
      </div>
    </div>
  );
};

export default certificates;
