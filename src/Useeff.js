import React, {  useState } from 'react'
import Child from './Child'
 function Useeff () {
    const [a, setA] =useState(852)
    const [b, setB] =useState(1000)
    const [show,setShow]=useState(false)

  //   useEffect(()=>{
  //       console.log("componentdidmount");//it is componentdidmount+componentdidupdate
  //   })
  //   useEffect(()=>{
  //     console.log("componentdidmount");//it is componentdidmount only
  // },[])
//   useEffect(()=>{
//     console.log("componentdidmount");//it is componentdidmount and second parameter selected variable only get componentdidupdate only
// },[a])
// useEffect(()=>{
//         console.log("componentdidmount");
//         })
  return (
    <div>
        useeffect{a}<br/>
        useeffect{b}<br/>

        <button onClick={()=>setA(a+1)}>click</button>
        <button onClick={()=>setB(b+1)}>click</button>
        <button onClick={()=>setShow(!show)}>show r not</button>
        
        {show?<Child/>:null}



    </div>
  )
}
export default Useeff