import React from 'react'
import MyPhoto from "../images/myphoto.jpg"
const myphoto = (props) => {
  return (
    <div><img src={MyPhoto} width={props.width} height={props.height} className="border-white border-8 rounded-full"></img></div>
  )
}

export default myphoto