import React from 'react'
import Nav from './componets/Nav';
import ProfilePic from '../images/female_avatar_efig.svg'
import Item from '../images/item.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";





const Gerente = () => {
  return (
    <>
      <Nav/>
      <div name="home" className='h-screen w-full bg-gradient-to-r from-cyan-950 to-blue-950'>
        <div className='container mx-auto text-gray-200 h-full flex flex-col justify-center items-start pl-10'>
        <div class="z-10 w-full lg:w-2/5 2xl:w-1/2 mx-auto my-8 text-center mt-20">
          <img src={ProfilePic} alt="" className='w-80 mx-auto'/>
            <h1 class="heading text-cyan-200 text-6xl font-bold lg:text-5xl !leading-normal">
                Jay Ann Rose G.
            </h1>     
            <h1 class="heading text-base mb-8 lg:text-lg !leading-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ex asperiores beatae tempora natus, necessitatibus nihil, ut eveniet eum consequatur, dolorem laborum. Delectus perspiciatis itaque, sequi quam ea exercitationem amet!
            </h1>  
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Resume
            </button>
            <div className='flex mt-6 justify-center items-center mx-auto space-x-4'>
              <FaGithub size={25} className='cursor-pointer'/>
              <FaLinkedinIn size={25} className='cursor-pointer'/>
              <FaFacebook size={25} className='cursor-pointer'/>
            </div>
            
            
        </div>
            </div>

            <section name="about" className='h-auto w-full bg-white overflow-hidden'>
    <div className="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
      {/* left */}
      <div className="relative">
        <div className="h-full rounded-full overflow-hidden">
          <img className='mx-auto hidden md:block md:w-64 md: lg:w-full' src={ProfilePic} alt="" />
        </div>
      </div>
      {/* right */}
      <div className="my-auto flex flex-col gap-3">
        <h1 className="text-5xl text-cyan-950 font-bold">ABOUT ME</h1>
        <h1 className="text-3xl font-medium dark:text-white">Better Design</h1>
        <h1 className="text-3xl font-medium dark:text-white">
          Better Experience
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur labore quidem, dicta optio consectetur nisi aspernatur cumque ullam illum ipsa!
        </p>
        <h2 className="text-black font-medium">HTML</h2>
        <div className="w-full bg-gray-200 h-1.5 rounded-md">
          <div className="w-full bg-orange-500 h-1.5 rounded-md"></div>
        </div>
        <h2 className="text-black font-medium">Javascript</h2>
        <div className="w-full bg-gray-300 h-1.5 rounded-md">
          <div className="w-4/6 bg-yellow-300 h-1.5 rounded-md"></div>
        </div>
        <h2 className="text-black font-medium">React</h2>
        <div className="w-full bg-gray-200 h-1.5 rounded-md">
          <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
        </div>
      </div>
    </div>
    </section>
      <section name="skills" className="bg-gradient-to-r from-cyan-950 to-blue-950 h-auto w-full">
      <div className="container mx-auto flex flex-wrap py-16">
        <h2 className="w-full my-12 text-5xl font-bold leading-tight text-center text-cyan-200">
          Lorem
        </h2>
        
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
             
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-start">
              
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-center">
              
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-end">
              
            </div>
          </div>
        </div>
      </div>
    </section>

    <section name='projects' className='w-full bg-white'>
    <div className="container mx-auto">
        {/* top */}
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-5xl text-black font-bold font mt-28">Works & Projects</h1>
        <p className="w-1/2 text-center text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi magnam minima est molestias dolorum aspernatur iure quos reprehenderit, porro aliquid.
          </p>
        </div>
        {/* bottom */}
        <div className="p-5 sm:p-0 flex flex-wrap justify-between cursor-pointer">
          {/* card */}
          <div
            className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <img src={Item} alt="" />
          </div>
          {/* Repeat the card divs for each card */}
          {/* card */}
          <div
            className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <img src={Item} alt="" />
          </div>
          {/* card */}
          <div
            className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <img src={Item} alt="" />
          </div>
          {/* card */}
          <div
            className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <img src={Item} alt="" />
          </div>
          {/* card */}
          <div
            className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <img src={Item} alt="" />
          </div>
          {/* card */}
          <div
            className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <img src={Item} alt="" />
          </div>
          {/* card */}
          <div
            className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <img src={Item} alt="" />
          </div>
          {/* card */}
          <div
            className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <img src={Item} alt="" />
          </div>
        </div>
      </div>
    </section>
    
    <section name="contact" className='h-5/6 w-full bg-gradient-to-r from-cyan-950 to-blue-950'>
    <div className="container mx-auto">
      {/* top */}
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="text-5xl text-cyan-200 font-bold mt-36">Have a Question?</h1>
        <p className="w-1/2 text-center text-white">
          Do you have an idea? Let's discuss it and see what we can do
          together.
        </p>
      </div>
      {/* bottom */}
      <form className="mt-5 p-8 flex flex-col gap-5 items-center">
        <input
          className="p-2 w-full md:w-1/2 ring-4 ring-black rounded-lg dark:bg-slate-800 dark:ring-0 dark:text-white"
          type="text"
          placeholder="Name"
        />
        <input
          className="p-2 w-full md:w-1/2 ring-4 ring-black rounded-lg dark:bg-slate-800 dark:ring-0 dark:text-white"
          type="email"
          placeholder="Email"
        />
        <textarea
          className="p-2 w-full md:w-1/2 ring-4 ring-black rounded-lg dark:bg-slate-800 dark:ring-0 dark:text-white"
          cols="30"
          rows="5"
          placeholder="Message..."
        ></textarea>
        <button className="w-20 bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 py-2 rounded-md cursor-pointer">
          Send
        </button>
      </form>
      <div className='flex mt-6 justify-center items-center mx-auto space-x-4'>
              <FaGithub size={25} className='cursor-pointer text-white'/>
              <FaLinkedinIn size={25} className='cursor-pointer text-white'/>
              <BiLogoGmail size={25} className='cursor-pointer text-white'/>
            </div>

    </div>
    </section>

    <div className="w-full bg-gray-800">
      <div className="container mx-auto py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          
          <span className="text-2xl font-bold text-cyan-200">Logo.</span>
        </div>
        <span className="hidden mx-auto md:block font-medium text-white">© 2024 Portfolio. Design with ♥️ by Jay Ann Rose Gerente.</span>
        
      </div>
    </div>
      </div>
    </>
  )
}

export default Gerente
