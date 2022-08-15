import React from 'react'
import MyPhoto from "../images/myphoto.jpg"
const myphoto = (props) => {
  return (
    <img src={MyPhoto} width={props.width} height={props.height} className=" border-white border-8 rounded-full"></img> 
  )
}

export default myphoto