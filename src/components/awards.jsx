import React from "react";
import Contests from "./ImgJSX/contests.jsx";
import Microsoft from "./ImgJSX/microsoft.jsx"
import Code from "./ImgJSX/code.jsx"
import Ninja from "./ImgJSX/ninja.jsx"
import GFG from "./ImgJSX/GFG.jsx"
const Awards = () => {
  return (
    <div id="awards" className="pl-16 pt-16 pr-8 border-black border-4 bg-slate-300 pb-28">
      <div className="flex h-full">
        <div className="  w-1/3 place-content-center pl-28"> 
            <Contests height="200px" width="250px"/>
            <div className="flex">
            <img src="https://i.pinimg.com/originals/73/e1/54/73e15422011e763ea9b303a7738e71a3.gif" alt="leet" height="150px" width="150px" />  
            <img src="https://media1.giphy.com/media/2epS8zhisYtHDCKrWv/giphy.gif" alt="gg" height="150px" width="150px"/> 
            </div>
            <Microsoft height="100px" width="250px" />
        </div>
        <div className="h-full w-1/3 rounded-2xl bg-white">
        <p className="text-cyan-600 font-semibold text-2xl pt-2">My Certifications</p>
        <p className="text-4xl font-semibold text-blue-900 pb-14">My Accomplishments</p>
        </div>
        <div className="h-1/1  w-1/3 ">
        <div className="pl-8">
          <GFG/>
        </div>
          <div className="pl-28">
          <Code height="200px" width="200px"/>
          </div>
          <div className="pl-28 pt-10">
          <Ninja/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
