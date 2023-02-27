import React,{useEffect,useState} from 'react'

const App = () => {
  const [count,setCount]=useState(0)
  useEffect(()=>{
     document.title=`magic ${count}`
  },[count])
  return (
    <>
      <div>App</div>
      <button onClick={()=>{setCount(count+1)}}>Magic</button>
    </>
   
  )
}

export default App