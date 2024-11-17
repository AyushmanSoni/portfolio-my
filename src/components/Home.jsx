import React from 'react'
import  HeroImage from '../assests/hero.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div name="home" className ="h-screen w-full bg-gradient-to-b
                                 from-black to-gray-800 via-black">
        <div className ="max-w-screen-lg mx-auto flex-col items-center
                             h-auto md:flex-row">
            <div className ="flex flex-col md:flex-row justify-center pt-36 h-full ">
                <div className=''>
                <h2 className="text-xl sm:text-6xl font-bold text-white">
                    Hi, I'm 
                    <br/>
                    Ayushman Soni
                </h2>
                <h3 className='font-medium text-2xl mt-3 text-blue-300 '>MERN Developer and UI/UX Designer</h3>
                <p className="text-gray-300 py-4 max-w-md">
                Passionate graphics designer transitioning
                 to the world of JS and React, 
                 blending creativity with technology 
                 for a unique digital experience
                </p>
                <div>
                <Link to="portfolio" smooth duration={500} className='group text-white w-min px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>

                        Portfolio
                        <span className="group-hover:rotate-90 duration-300 ">
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                        
                    </Link>
                </div>
                </div>
                <div className='w-1/2'>
                <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-3/4"/>
  
                </div>
                
                   
            </div>
        </div>
    </div>
  );
};

export default Home;