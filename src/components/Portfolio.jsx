import React from 'react'
import lnf from '../assests/lnf.png'
import brochure from '../assests/brochure.png'
import effe from '../assests/effe.png'
import ticket from '../assests/ticket.png'
import web from '../assests/web.png'

const Portfolio = () => {

    const portfolios =[
        {
            id:1,
            src:lnf
        },
        {
            id:2,
            src:brochure
        },
        {
            id:3,
            src:effe
        },
        {
            id:4,
            src:ticket
        },
        {
            id:5,
            src:web
        },

    ];
  return (
    <div name ="portfolio" className="bg-gradient-to-b  from-black to-gray-800 text-white w-full ">
        <div className='pt-24'>
            
        
        <div name ="inside" className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-3/5 '>
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                    Portfolio
                </p>
                <p className="py-6 ">
                    Check out some of my works right here
                </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                portfolios.map(({id,src})=>(  
                <div key ={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                    <div className="flex items-center justify-center">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Dribbble</button>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Figma</button>
                    </div>
                </div>
            
                ))
            }
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Portfolio