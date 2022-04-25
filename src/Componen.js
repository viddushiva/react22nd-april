import React, { useState } from "react"
function Componen (props){
 const [count,setCount] = useState(0)
  const change=()=>{
setCount(count+1)
  }
    return(
        <>
        hello my name is {props.custom}{count}<br/>
        <button onClick={change}>functi click</button><br/>
        </>
    )
}
export default Componen