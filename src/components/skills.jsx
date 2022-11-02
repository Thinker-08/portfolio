import React from "react";
import { useState , useEffect, useRef } from "react";
const Skills = () => {

  const [c, setC] = useState(0);
  const [data, setData] = useState(0);
  const [mern, setMern] = useState(0);
  const [java, setJava] = useState(0);
  const [python, setPython] = useState(0);
  const [sql, setSql] = useState(0);
  const [myElement,setMyElement] = useState(false);
  const myRef = useRef();
  const Loader=()=>{
    if(myElement){
      let progressC=0, progressData=0, progressMern=0, progressJava=0, progressPython=0, progressSql=0; 
      let interval=10;
      let increment=1;
      let progressInterval = setInterval(()=>{
        progressC+=increment;
        setC(progressC);
        if(progressC>=90){
          clearInterval(progressInterval);
        }
      },interval);
      let progressIntervalD=setInterval(()=>{
        progressData+=increment;
        setData(progressData);
        if(progressData>=90){
          clearInterval(progressIntervalD);
        }
      },interval)
      let progressIntervalM=setInterval(()=>{
        progressMern+=increment;
        setMern(progressMern);
        if(progressMern>=80){
          clearInterval(progressIntervalM);
        }
        },interval)
        let progressIntervalJ=setInterval(()=>{
          progressJava+=increment;
          setJava(progressJava);
          if(progressJava>=70){
            clearInterval(progressIntervalJ);
          }
          },interval)
          let progressIntervalP=setInterval(()=>{
            progressPython+=increment;
            setPython(progressPython);
            if(progressPython>=60){
              clearInterval(progressIntervalP);
            }
            },interval)
            let progressIntervalS=setInterval(()=>{
              progressSql+=increment;
              setSql(progressSql);
              if(progressSql>=70){
                clearInterval(progressIntervalS);
              }
              },interval)
            
    }else{
      setC(0);
      setData(0);
      setJava(0);
      setMern(0);
      setPython(0);
      setSql(0);
    }
  }
  useEffect(() => {
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0];
      setMyElement(entry.isIntersecting);
    })
    observer.observe(myRef.current);
  }, [])
  
  useEffect(()=>{
    Loader();
  },[myElement])
  return (
    <div id="skills" className="w-6/6 h-auto pl-16 pt-20 pb-24 mr-12">
    <div className="change-skills-heading">
    <p className="text-cyan-600 font-semibold text-2xl ">My Skills</p>
      <p className="text-5xl font-semibold text-blue-900 pb-10  ">Awesome Journey</p>
    </div>
    <div ref={myRef} className="flex flex-wrap gap-10 bg-slate-300 p-12 ml-10 pb-20 rounded-2xl shadow-lg change-skills" >
        <div className="change-skill-bar relative pb-7 ">
          <div className="flex">
          <p className="text-[1.675rem] text-start font-semibold pt-3 w-11/12 text-blue-900">C/C++</p>
          <p className="text-end font-semibold pt-8 text-blue-900">{c}%</p>
          </div>
            <div className="w-full bg-cyan-500 h-3 absolute rounded-2xl"></div>
            <div className={`bg-blue-800 h-3 absolute rounded-2xl`} style={{width:`${c}%`}}></div>
        </div> 
        <div className="change-skill-bar relative pb-7 ">
        <div className="flex">
        <p className="text-[1.675rem] text-start font-semibold pt-3 w-11/12 text-blue-900">Data Structures and Algorithms</p>
        <p className="text-end font-semibold pt-8  text-blue-900">{data}%</p>
        </div>
            <div className="w-full bg-cyan-500 h-3 absolute rounded-2xl"></div>
            <div className="w-11/12 bg-blue-800 h-3 absolute rounded-2xl" style={{width:`${data}%`}}></div>
        </div> 
        <div className="change-skill-bar relative  pb-7 ">
        <div className="flex">
        <p className="text-[1.675rem] text-start font-semibold pt-3 w-11/12 text-blue-900">MERN Full Stack Developer</p>
        <p className="text-end font-semibold pt-8  text-blue-900">{mern}%</p>
        </div>
            <div className="w-full bg-cyan-500 h-3 absolute rounded-2xl"></div>
            <div className="w-10/12 bg-blue-800 h-3 absolute rounded-2xl" style={{width:`${mern}%`}}></div>
        </div> 
        <div className="change-skill-bar relative pb-7 ">
        <div className="flex">
        <p className="text-[1.675rem] text-start font-semibold pt-3 w-11/12 text-blue-900">Python</p>
        <p className="text-end font-semibold pt-8  text-blue-900">{python}%</p>
        </div>
            <div className="w-full bg-cyan-500 h-3 absolute rounded-2xl"></div>
            <div className="w-7/12 bg-blue-800 h-3 absolute rounded-2xl" style={{width:`${python}%`}}></div>
        </div> 
        <div className="change-skill-bar relative pb-7 ">
        <div className="flex">
        <p className="text-[1.675rem] text-start font-semibold pt-3 w-11/12 text-blue-900">JavaScript</p>
        <p className="text-end font-semibold pt-8  text-blue-900">{java}%</p>
        </div>
            <div className="w-full bg-cyan-500 h-3 absolute rounded-2xl"></div>
            <div className="w-9/12 bg-blue-800 h-3 absolute rounded-2xl" style={{width:`${java}%`}}></div>
        </div> 
        <div className="change-skill-bar relative pb-7 ">
        <div className="flex">
        <p className="text-[1.675rem] text-start font-semibold pt-3 w-11/12 text-blue-900">SQL</p>
        <p className="text-end font-semibold pt-8  text-blue-900">{sql}%</p>
        </div>
            <div className="w-full bg-cyan-500 h-3 absolute rounded-2xl"></div>
            <div className="w-9/12 bg-blue-800 h-3 absolute rounded-2xl" style={{width:`${sql}%`}}></div>
        </div> 
      </div>
    </div>
  );
};

export default Skills;
