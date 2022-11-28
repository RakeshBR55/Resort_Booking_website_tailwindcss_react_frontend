import React,{useEffect} from 'react'

const Test = () => {
    useEffect(async () => {
      const response = await fetch('http://127.0.0.1:8800/test',{
        method:'GET',
        credentials:'include',
        headers:{
            'content-type':'application/json'
        }
      })
      const data = await response.json();
      console.log(data)
    }, [])
    
  return (
    <div>Testing the route and cookie</div>
  )
}

export default Test