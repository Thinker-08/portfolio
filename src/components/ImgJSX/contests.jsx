import React from 'react'
import Contests from "../images/contest.gif"

const contests = (props) => {
  return (
    <div><img src={Contests} width={props.width} height={props.height} alt="con"/></div>
  )
}

export default contests