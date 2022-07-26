import React from 'react'
import Image from "../images/code.gif"
const Sample = (props) => {
  return (
    <div><img src={Image} width={props.width} height={props.height}></img></div>
  )
}

export default Sample
