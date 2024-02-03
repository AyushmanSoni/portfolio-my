import React from "react"
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
// import {BsFillPersonalLinesFill} from "react-icons/bs";


const SocialLinks = () => {

    const links=[
        {id:1,
        child: (
            <>
                    LinkedIn <FaLinkedin size={30}/>
            </>
        ),
        href: 'https://www.linkedin.com/in/ayushman-soni-79082b263/',
        style: 'rounded-tr-md'
    },
    {id:2,
        child: (
            <>
                    GitHUb <FaGithub size={30}/>
            </>
        ),
        href: 'https://github.com/AyushmanSoni',
    },
    {id:3,
        child: (
            <>
                    Mail <HiOutlineMail size={30}/>
            </>
        ),
        href: 'mailto:foo@gmail.com',
        style: 'rounded-br-md',
    },
    // {id:4,
    //     child: (
    //         <>
    //                 Resume <BsFillPersonalLinesFill size={30}/>
    //         </>
    //     ),
    //     href: '/resume.pdf',
    //     style: 'rounded-tr-md',
    //     download:true,
    // }
];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-3 fixed ">
        <ul>

            {links.map(({id,child,href,style}) => (
                <li 
                key={id} 
                className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + " " + style}>
                <a 
                href={href} 
                className="flex justify-between items-center w-full text-white"
                >
                    {child}
                    </a>
            </li>
            ))}

        </ul>
    </div>
  )
}

export default SocialLinks;