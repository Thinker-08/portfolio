import React from 'react'
import Image from "../images/education.png"
const Sample = (props) => {
  return (
    <div className="hover:scale-125"><img src={Image} width={props.width} height={props.height}></img></div>
  )
}

export default Sample
