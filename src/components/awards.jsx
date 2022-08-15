import React from "react";
import Contests from "./ImgJSX/contests.jsx";
import Microsoft from "./ImgJSX/microsoft.jsx";
import Code from "./ImgJSX/code.jsx";
import Ninja from "./ImgJSX/ninja.jsx";
import GFG from "./ImgJSX/GFG.jsx";
import Point from "./ImgJSX/point";
import Forces from "./ImgJSX/forces"
import Add from "./images/tro.jpg"
const Awards = () => {
  return (
    <div id="awards" className="pl-16 pt-24 pr-8 bg-slate-300 pb-20 ">
      <div className="flex h-full">
        <div className="  w-1/3 place-content-center pl-28 dis">
          <Contests height="200px" width="250px"/>
          <div className="flex">
            <img
              src="https://i.pinimg.com/originals/73/e1/54/73e15422011e763ea9b303a7738e71a3.gif"
              alt="leet"
              height="150px"
              width="150px"
            />
            <img
              src="https://media1.giphy.com/media/2epS8zhisYtHDCKrWv/giphy.gif"
              alt="gg"
              height="150px"
              width="150px"
            />
          </div>
          <Microsoft height="100px" width="250px"/>
        </div>
        <div className="h-full change-awards rounded-2xl bg-white shadow-lg">
          <p className="text-cyan-600 font-semibold text-2xl pt-2">
            My Awards
          </p>
          <p className="text-4xl font-semibold text-blue-900 pb-7">
            My Accomplishments
          </p>
          <div className="flex pb-2 pl-3">
            <Point height="40px" width="40px" />
            <p className="text-xl font-semibold w-5/6">
              {" "}
              Qualified Codechef Snackdown Round 1A(2021) Got a rank of 63 among
              17500 people
            </p>
          </div>
          <div className="flex pb-4 pl-3">
            <Point height="40px" width="40px" />
            <p className="text-xl font-semibold w-5/6 pt-1">
              {" "}
              CodeKaze(2021) 1182 out of 1lakh+
            </p>
          </div>
          <div className="flex pb-5 pl-3">
            <Point height="40px" width="40px" />
            <p className="text-xl font-semibold w-5/6">
              {" "}
              Codechef 4 star(max rating 1907)
            </p>
          </div>
          <div className="flex pb-5 pl-3">
            <Point height="40px" width="40px" />
            <p className="text-xl font-semibold w-5/6">
              {" "}
              Codeforces specialist (max rating 1458)
            </p>
          </div>
          <div className="flex pb-4 pl-3">
            <Point height="40px" width="40px" />
            <p className="text-xl font-semibold w-4/5">
              Rank 51 out of 5000+ participants in Inter NIT Codathon 2022
            </p>
          </div>
          <div className="flex pb-4 pl-3">
            <Point height="40px" width="40px" />
            <p className="text-xl font-semibold w-4/5">
              Qualified JumpStart 2022 Publicis Sapient Final Round
            </p>
          </div>
        </div>
        <div className="h-1/1  w-1/3 dis">
          <div className="pl-8">
            <GFG />
          </div>
          <div className="pl-28">
            <Code height="200px" width="200px" />
          </div>
          <div className=" pt-10 flex">
            <Ninja />
            <Forces/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
