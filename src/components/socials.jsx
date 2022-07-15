import React from 'react'
import Instagram from './instagram'
import Github from './github'
import Linkedin from './linkedin'
import Twitter from './twitter'
const socials = () => {
  return (
    <div className='fixed h-screen py-56'>
      <div className=" flex flex-col bg-slate-300 border-black border-5 justify-center">
      <i className=" transition ease-in-out delay-50 duration-100 hover:scale-150  py-3 px-3"><a href="https://www.instagram.com/thethinker_08/" target="__blank"><Instagram width="30px" height="30px"/></a></i>
      <i className="transition ease-in-out delay-50 duration-100 hover:scale-150 px-3 py-3"><a href="https://github.com/Thinker-08" target="__blank"><Github width="30px" height="30px"/></a></i>
      <i className="transition ease-in-out delay-50 duration-100 hover:scale-150 px-3 py-3"><a href="https://www.linkedin.com/in/mihir-agrawal-b94348200/" target="__blank"><Linkedin width="30px" height="30px"/></a></i>
      <i className="transition ease-in-out delay-50 duration-100 hover:scale-150 px-3 py-3"><a href="https://twitter.com/MihirAg80019659" target="__blank"><Twitter width="30px" height="30px"/></a></i>
      </div>
    </div>
  )
}

export default socials