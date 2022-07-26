import React from 'react'
import Instagram from "../images/instagram.png"
const instagram = (props) => {
  return (
    <div><img src={Instagram} width={props.width} height={props.height}></img></div>
  )
}

export default instagram