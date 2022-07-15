import React from "react";
import Sample from "./sample";
import User from "./user";
import Phone from './phone'
import Mail from "./mail"
import Music from "./music"
import Travel from "./travel"
import Movie from "./movie"
import Sports from "./sports"
const about = () => {
  return (
    <div id="about" className="bg-white flex  flex-wrap w-6/6 h-auto pl-16">
      <div className="flex ml-16 mr-16 mt-24 ">
        <div className="bg-slate-300 ml-32 my-4 w-1/1 py-1 ">
          <Sample height="500px" width="400px" />
        </div>
        <div className="  my-4 w-1/2 py-1 pl-16 text-left ">
          <p className="text-4xl text-cyan-600 font-semibold">My Intro</p>
          <p className="text-6xl text-blue-900 font-medium py-1">About Me</p>
          <p className="text-xl ">
            Future Engineer. I am currently a second-year student at NIT
            Kurukshetra who focuses on Electrical and Programming skills to
            solve modern-day problems.
            <div className="my-5">
              <div className="flex py-3">
                <User height="40px" width="40px" />
                <p className="pl-3 text-xl py-1 font-bold text-blue-900">Name</p>
                <p className="mx-24 text-xl py-1 font-bold text-blue-900">:</p>
                <p className="py-1 text-xl text-semibold text-left">Mihir Agrawal</p>
              </div>
              <div className="flex py-3">
                <Phone height="40px" width="40px" />
                <p className="pl-3 text-xl py-1 font-bold text-blue-900">Phone</p>
                <p className="mx-24 text-xl py-1 font-bold text-blue-900">:</p>
                <p className="py-1 text-xl text-semibold text-left">9580960935</p>             
                {/* #10A9F1 */}
              </div>
              <div className="flex py-3 px-2">
                <Mail height="40px" width="40px" />
                <p className="pl-3 text-xl py-1 font-bold text-blue-900">Email</p>
                <p className="mx-24 text-xl py-1 font-bold text-blue-900">:</p>
                <p className="py-1 text-xl text-semibold text-left">agarwalmihir08@gmail.com</p>
              </div>
            </div>
            <p className="text-2xl text-blue-900 font-bold ">My Interests</p>
            <div className="flex flex-row py-3 justify-between">
                <div className="flex flex-row ">
                    <Music height="30px" width="30px"/>
                    <p className="px-2 text-slate-600 font-semibold">Music</p>
                </div>
                <div className="flex flex-row">
                    <Travel height="30px" width="30px"/>
                    <p className="pl-2 text-slate-600 font-semibold">Travel</p>
                </div>
                <div className="flex flex-row">
                    <Movie height="30px" width="30px"/>
                    <p className="pl-2 pt-1 text-slate-600 font-semibold">Movie</p>
                </div>
                <div className="flex flex-row">
                    <Sports height="30px" width="30px"/>
                    <p className="pl-2 pt-0 text-slate-600 font-semibold">Sports</p>
                </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
