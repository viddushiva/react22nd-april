import React, { useEffect } from 'react'

const Child = () => {
    useEffect(()=>{
        console.log(555);
    })
    useEffect(()=>{
        return ()=>{
            console.log('componentwillunmount');
        }
    })
  return (
    <div>
        hello my name is vidhata
    </div>
  )
}

export default Child