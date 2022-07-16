import React from "react";
import Edu from "./educ";
import Point from "./point";
import Suitcase from "./suitcase";

const education = () => {
  return (
    <div
      id="education and Work Experience"
      className="bg-slate-300 mt-10 w-6/6 h-auto pl-16 pt-24 pb-16"
    >
      <p className="text-cyan-600 font-semibold text-2xl">My Qualifications</p>
      <p className="text-5xl font-semibold text-blue-900">Awesome Journey</p>
      <div className=" ml-36 mr-52 mt-5">
        <div className="flex ">
          <div className="flex pt-4 w-1/2 ">
            <Edu height="50px" width="50px" />
            <p className="text-blue-900 pt-2 pl-2 text-3xl font-bold">
              Education
            </p>
          </div>
          <div className="flex pt-3 w-1/2 ">
            <Suitcase height="40px" width="40px" />
            <p className="text-blue-900 pt-2 pl-2 text-3xl font-bold ">
              Experience
            </p>
          </div>
        </div>
        <div className="flex ">
          <div>
            <div className="flex pl-1 pt-3 ">
              <Point height="40px" width="40px" />
              <div className="text-left">
                <p className="text-2xl  font-bold text-blue-800">National Institute of Technology, Kurukshetra</p>
                <p className="text-xl pt-0 font-bold text-cyan-600">Bachelor of Technology</p>
                <p className="text-lg pt-0 font-semibold text-blue-900">2020-2024</p>
                <p className="text-lg pt-0 font-semibold text-blue-900">9.57 CGPA</p>
              </div>
            </div>
            <div className="flex pl-1 pt-3 ">
              <Point height="40px" width="40px"/>
              <div className="text-left">
                <p className="text-2xl  font-bold text-blue-800">Cathedral Senior Secondary School, Lucknow</p>
                <p className="text-xl pt-0 font-bold text-cyan-600">High Secondary (PCM)</p>
                <p className="text-lg pt-0 font-semibold text-blue-900">96.2%</p>
                <p className="text-xl pt-0 font-bold text-cyan-600">Senior Secondary</p>
                <p className="text-lg pt-0 font-semibold text-blue-900">97.4%</p>
                <p className="text-lg pt-0 font-semibold text-blue-900">2006-2020</p>
              </div>
            </div>
          </div>
          <div>
          <div className="flex pl-9 pt-1 ">
              <Point height="40px" width="40px" />
              <div className="text-left w-auto">
                <p className="text-2xl  font-bold text-blue-800">Automated File Approval System in a Department</p>
                <p className="text-xl pt-0 font-bold text-cyan-600">Tech Used: React, MongoDB, JavaScript, Express, NodeJS</p>
                <p className="text-lg pt-0 font-semibold text-blue-900">Apr 22 - May 22</p>
                <p className="w-1/1 flex flex-wrap text-lg pt-0 font-semibold text-blue-900">
                An automated approval process for submitting, routing and
                </p>
                <p className="w-1/1 flex flex-wrap text-lg pt-0 font-semibold text-blue-900">
                  collaborating on a variety of document types
                  to make 
                </p>
                <p className="w-1/1 flex flex-wrap text-lg pt-0 font-semibold text-blue-900">approval decisions.</p>
              </div>
            </div>
            <div className="flex pl-9 pt-3 ">
              <Point height="40px" width="40px"/>
              <div className="text-left">
                <p className="text-2xl  font-bold text-blue-800">NewsApp </p>
                <p className="text-xl pt-0 font-bold text-cyan-600">Tech Used:React, NewsAPI, JavaScript</p>
                <p className="text-lg pt-0 font-semibold text-blue-900">Jun 22-July 22</p>
                <p className="text-lg pt-0 font-semibold text-blue-900">A website which displays top news headlines.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default education;
