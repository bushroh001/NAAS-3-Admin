

import {React,useEffect, } from "react";



import AOS from "aos";
import "aos/dist/aos.css";
import {Link, useLocation} from "react-router-dom"

import {ThreeDots} from "react-loader-spinner"



function ViewAEC303 (props) {


    const location = useLocation()
    const data = location.state
     
    const ArrayList = props.LectureListAEC303     
                


           

       


             
    useEffect(()=> {
                     AOS.init({duration:2000})

                },[])

       return (
               < >
          <div className="bg-[#f5f5f5] w-full text-[#182c25] min-h-screen">
          <h1 className="text-center font-bold text-white bg-gradient-to-r font-montserat from-[#182c25] to-[#1e453e]" data-aos="fade-left"> {data.CourseTitle}  {data.CourseCode}</h1>

           {/* show loader */}
             {console.log(props)}
           {props.loading ?<div></div>:<div className="flex min-h-screen justify-center items-center font-montserat text-xl font-bold">loading<ThreeDots height="80" width="80" radius="9" color="#182c25" ariaLabel="loading"/></div>}
          { ArrayList.length === 0 ? 
          <div className={`min-h-screen text-[#182c25] flex ${props.loading ? "block" : "hidden"} font-montserat justify-center items-center`}> No Lecture Available</div>  :
                  ArrayList.map((info,i) => (
                         <div  key={i} className={`flex items-center ${props.loading ? "block" : "hidden"} text-[#182c25] font-josefins justify-center `} data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-[#182c25] 
                              items-center text-[#182c25] 
                             justify-cente w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info._id}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
       <div className='text-center text-[#182c25] '>
                <h1 className=' text-[15px] font-bold px-2  '>{info.Topic}  </h1>
                <h3 className=' pb-3 pt-2'>View</h3>
        </div>                 
               


                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }




                    
               </div>  
                
              </>
              );
                   }

     export default ViewAEC303;
