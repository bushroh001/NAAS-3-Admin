import React from 'react'

import {Link, useLocation, useNavigate} from "react-router-dom"
import {BiDownload} from "react-icons/bi"
import axios from 'axios'



function UploadAEC() {

    const location = useLocation()
     const data = location.state
     
     console.log(data.document[0].url)

     const navigate = useNavigate();

 const HandleSubmit = (e) => {
  e.preventDefault();
 }

 const deleteUser = async (id) => {
  // i want to do yes or no alert here
  alert("This lecture will be deleted")
  try{
    await axios.delete(`https://fair-erin-chameleon-gown.cyclic.app/api/${data.Code}/${id}`);
    alert("Data deleted.")
    navigate("/");
    window.location.reload()
      }catch (err) 
  {
  console.log(err);
  alert("Unable to delete, Kindly ensure you are connectecd to the internet")
   }
}
  return (
    <div className='min-h-screen bg-[#f5f5f5]'>
    <h1 className=' text-center font-bold w-full pb-1 font-montserat text-white bg-gradient-to-r from-[#182c25] to-[#1e453e]  pt-1 px-2 text-xl'>Lecture Note</h1>
    <div className='flex min-h-screen font-josefins justify-center items-center'>
      <div className='flex flex-col  shadow-lg w-[311px] h-fit border-2 border-[#182c25] bg-white text-[#182c25]  items-center rounded-[32px]'>
   
   
    {/*  */}
     <div className=' text-center  mt-[37.5px]'>
      <h1 className='font-medium text-xl'>{data.CourseCode}</h1>
      <h1 className='font-medium text-xl'>{data.CourseTitle}</h1>
    </div>
    
    
    
     {/*  form */}
     <div className=''>
     <form onSubmit={HandleSubmit} className='w-[220px] mt-[30.5px]'>

      <h1 className='w-full  text-[15px] font-bold   '>{data.Topic}  </h1>
      <p className='w-full  text-[14px] pt-[18px] '> {data.Description}  </p>


         {/* View file= pdf/word and download*/}

         <div className='flex justify-between mt-[15px] items-center'>

    <a href={data.document[0].url} download={data.Topic}  className={"text-xl p-1 "}><span className='flex gap-x-1 justify-center tracking-wider  text-[14px] items-center'>Download File<BiDownload/></span></a>
         </div>


             
      
               {/* Delete button */}
               <div className='flex justify-between  my-[15px]  mb-[15px] items-center'>
               <Link to="/view">
                
             <button className='p-[3px] bg-[#182c25] hover:text-white duration-300 transition-colors focus:outline-0 hover:border-[0.5px] border-[#182c25] hover:bg-white  text-white rounded-lg'>Back</button>
               </Link>
             <button onClick={()=>deleteUser(data._id)} className='p-[3px] text-white bg-[#182c25] duration-300 transition-colors focus:outline-0 hover:text-red-500 hover:border-[1px] hover:bg-white hover:border-red-500 rounded-lg'>delete</button>
               </div>
            </form>
         </div>

         
         
           </div>
       </div>
    </div>
  )
}

export default UploadAEC
