import React, { useState } from 'react'
import Button from './Button'
import { Oval } from 'react-loader-spinner'
import {useLocation, useNavigate} from "react-router-dom"
import axios from "axios"
function UploadLectureANS301() {

    const location = useLocation()
     const data = location.state
     
     console.log(data)

     const navigate = useNavigate();

     const [Topic, setTopic] = useState("")
     const [Description, setDescription] = useState("")
     const [document, setdocument] = useState("")
const [Loading , setLoading] = useState(false)
    
     const saveForm = async (e) => {
      e.preventDefault();
       
       axios.post("https://fair-erin-chameleon-gown.cyclic.app/api/ans301/add", {Topic,Description,document})
      .then((res)=>
      { 
      console.log("saved succesfully!")
      navigate("/");
      window.location.reload() 

      alert("Uploaded succesfully!")
    }).catch((err)=> {
        console.log(err)
        alert("Unable to submit form, kindly complete the form")
      })
      
      
    }
    

    const Onchangeimages = async (e) => { 
      const files = Array.from(e.target.files)
      console.log(e.target.files.length)  
    if (e.target.files.length < 1 ) {
     setdocument(null)
      alert("please select only 1 images")
      }else{
           setdocument([]);
           files.forEach(file => {
    
               const reader = new FileReader();
    
               reader.onload = () => {
                   if (reader.readyState === 2) {
                       setdocument(oldArray => [...oldArray, reader.result]);
                       
                   }
               }
    
               reader.readAsDataURL(file)
    
           })
      }
    }

    const OnchangeTopic =(e)=> {
      setTopic(e.target.value)
    }

    const OnchangeDescription =(e)=> {
      setDescription(e.target.value)
    }
  console.log(Topic,Description,document)
  return (
    <div className='min-h-screen sm:min-h-[900px] bg-[#f5f5f5]'>
    <h1 className='text-center font-bold font-montserat text-white bg-gradient-to-r from-[#182c25] to-[#1e453e]'>Upload New Lecture</h1>
    <div className='flex bg-[#182c25] font-josefins justify-center items-center'>
      <div className='flex flex-col shadow-lg w-[311px] h-[445px] border-2 border-[#182c25] bg-white absolute top-[160px] items-center rounded-[32px]'>
   
   
    {/*  */}
     <div className=' text-center text-[#182c25] mt-[37.5px]'>
      <h1 className='font-medium text-xl'>{data.CourseCode}</h1>
      <h1 className='font-medium text-xl'>{data.CourseTitle}</h1>
    </div>
    
    
    
     {/*  form */}
     <div className=' font-josefins'>
     <form className='w-[220px] mt-[60.5px]' onSubmit={saveForm} encType="multipart/form-data">

      <input placeholder='Topic or Title'  value={Topic} onChange={OnchangeTopic} 
      className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px] border-[#182c25] text-[#182c25]'/>

      <textarea placeholder='Description'  value={Description} onChange={OnchangeDescription}
      className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px]  border-[#182c25] text-[#182c25] mt-[24px]'/>

      <h3 className='text-xs pt-5 text-[#182c25] text-center'>kindly upload document only below (Max 5mb)</h3>

      <input  type="file"  name='document' onChange={Onchangeimages}
      className='w-full border-b-[1px] focus:outline-0 text-[14px] pb-[3.5px]  border-[#182c25] mt-[12px]' required/>

  
           {/* Upload button */}
         <div className='flex justify-center items-center mb-2'>
        {Loading ? <div className='pt-5 pb-2'><Oval height="30" width="30" radius="4" color="#140a22" ariaLabel="loading"/> </div> : <Button name="Upload"/>}
     </div>
        </form>
     </div>


     
       </div>
   </div>
</div>
  )
}

export default UploadLectureANS301
