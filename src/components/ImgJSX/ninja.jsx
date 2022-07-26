import React from 'react'
import Image from "../images/ninja.png"
const Sample = (props) => {
  return (
    <div><img src={Image} width={props.width} height={props.height}></img></div>
  )
}

export default Sample
