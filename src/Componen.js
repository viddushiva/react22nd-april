import React, { useState } from "react"
function Componen (props){
 const [count,setCount] = useState("anuj ")
 const [coun,setCoun] = useState({name:"shiva",age:999})

  const change=()=>{
setCount("bharat")
  }
  const chang=()=>{
      setCoun((qw)=>({
          ...qw,
          age:coun.age+1
      }))
  }
    return(
        <>
         hello my name is {props.custom}{count}<br/> 
        hello my name is {coun.age}<br/>

 
        <button onClick={change}>functi click</button><br/>
        <button onClick={chang}>functi click</button><br/>

        </>
    )
}
export default Componen
