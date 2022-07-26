import React from 'react'
import Image from "../images/portf.png"
const Titleimg = (props) => {
  return (
    <div><img src={Image} width={props.width} height={props.height}></img></div>
  )
}

export default Titleimg