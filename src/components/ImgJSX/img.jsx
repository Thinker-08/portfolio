import React from 'react'
import Img from "../images/image.jpg"
const img = (props) => {
  return (
    <div><img src={Img} height={props.height} width={props.width} alt="img" /></div>
  )
}

export default img