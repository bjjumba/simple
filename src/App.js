import React,{useEffect,useState,useRef} from 'react'
import './App.css'
import axios from 'axios'
const App = () => {
  const inputRef=useRef(null)
  const [count,setCount]=useState(0)
  const [name,setName]=useState('')
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  // useEffect(()=>{
  //    document.title=`magic ${count}`
  //    console.log(inputRef.current.value)
  // },[count])
  const Submit=async()=>{
    const formData=new FormData()
    let name="Jjumba"
    let studentNo="2000702032"
    let program=1
    let email="esther@gmail.com"
    formData.append('images', image.data)
    formData.append('firstName', name)
    formData.append('lastName', name)
    formData.append('studentNo', studentNo)
    formData.append('regNo', studentNo)
    formData.append('program', program)
    formData.append('email',email)
    formData.append('tel',studentNo)
    formData.append('middleName',studentNo)
    try {
      const res = await axios.post(
          "http://localhost:4000/student/register",
      formData,
      { headers: {'Content-Type': 'multipart/form-data'}}
  );
    console.log(res);
  } catch (ex) {
    console.log(ex.message);
  }

  }
  //handle file Change

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }

  return (
    <div className='container'>
      <div>App</div>
      <input type='text' name="firstName" value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type='file' onChange={handleFileChange}/>
      <button onClick={()=>{Submit()}}>
        Magic
      </button>
    </div>
   
  )
}

export default App