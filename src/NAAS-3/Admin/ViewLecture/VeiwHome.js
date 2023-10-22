

import {React,useEffect, } from "react";
import {Link} from "react-router-dom";
import image1 from "../Images/aec301.jpg"
import image2 from "../Images/aec303.jpg"
import image3 from "../Images/ans301.png"
import image4 from "../Images/axd301.jpg"
import image5 from "../Images/cpp301.jpg"
import image6 from "../Images/cpp303.png"
import image7 from "../Images/slm301.png"



import AOS from "aos";
import "aos/dist/aos.css";





function ViewHome (props) {

    
  
    const ViewList = [
        {
            CourseTitle : "Statistics and Biometrics.",
            CourseCode: "AEC 301",
            Link : "view-AEC301",
            image  : image1,
        },
        {
            CourseTitle : "Principles of Agricultural Economics. [I]",
            CourseCode: "AEC 303",
            Link : "view-AEC303",
            image  : image2,
        },

        {
            CourseTitle : "Non-ruminant Animal Production.",
            CourseCode: "ANS 301",
            Link : "view-ANS301",
            image  : image3,
        },

        {
            CourseTitle : "Extension Teaching & Learning Process and Methods.",
            CourseCode: "AXD 301",
            Link : "view-AXD301",
            image  : image4,
        },

        {
            CourseTitle : "Agronomy of Arable Crops & Agro-climatology.",
            CourseCode: "CPP 301",
            Link : "view-CPP301",
            image  : image5,
        },

        {
            CourseTitle : "Introductory Agricultural Entomology.",
            CourseCode: "CPP 303",
            Link : "view-CPP303",
            image  : image6,
        },
        {
            CourseTitle : "Introductory Pedology & Soil Physics.",
            CourseCode: "SLM 303",
            Link : "view-SLM301",
            image  : image7,
        },
       ]
    useEffect(()=> {
                     AOS.init({duration:2000})

                },[])

       return (
               < >
          <div className="bg-[#f5f5f5] w-full min-h-screen">
          <h1 className="text-center font-bold font-montserat text-white bg-gradient-to-r from-[#182c25] to-[#1e453e]" data-aos="fade-left"> View Lectures</h1>
                    {
                        ViewList.map((info,i) => (
                            
                          <div  key={i} className="flex items-center text-[#182c25] font-josefins justify-center " data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px]  duration-500 hover:border-[#182c25] 
                             hover:bg-[#182c25] to-[#1e453e] items-center text-[#182c25] hover:text-white hover:drop-shadow-[0px_9px_4px_rgba(23,255,120,0.3)] 
                              w-[300px] md:w-[400px] h-[400px] sm:h-[500px] shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/view/${info.Link}`}}  state={info}>
                                <img src={info.image} alt="Sorry! Not Found" className={`"rounded-lg 
                              text-2xl h-[300px] shadow-sm  ${info.image_url=== null? "hidden" : "block" } 
                              sm:w-[400px] md:w-[500px] sm:h-[400px] object-cover w-[200px]"`}/>

                              <div className="  hover:text-white w-full  ">
                                <h1 className=" font-bold  text-center pt-1  mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center pt-2  ">  {info.CourseCode} </h1>
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

     export default ViewHome;
