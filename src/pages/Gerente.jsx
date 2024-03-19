import React, { useState } from "react";
import Nav from "./componets/Nav";
import ProfilePic from "../images/female_avatar_efig.svg";
import Item from "../images/item.png";
import Hero from "../images/hero.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Gerente = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Nav />
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-r from-cyan-950 to-blue-950"
      >
        <div className="container mx-auto text-gray-200 h-full flex flex-col justify-center items-start pl-10">
          <div className="z-10 w-full lg:w-2/5 2xl:w-1/2 mx-auto my-8 text-center mt-20">
            <img src={ProfilePic} alt="" className="w-80 mx-auto" />
            <h1 className="heading text-cyan-200 text-6xl font-bold lg:text-5xl !leading-normal">
              Jay Ann Rose G.
            </h1>
            <h1 className="heading text-base mb-8 lg:text-lg !leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur ex asperiores beatae tempora natus, necessitatibus
              nihil, ut eveniet eum consequatur, dolorem laborum. Delectus
              perspiciatis itaque, sequi quam ea exercitationem amet!
            </h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full">
              Resume
            </button>
            <div className="flex mt-6 justify-center items-center mx-auto space-x-4">
              <FaGithub size={25} className="cursor-pointer" />
              <FaLinkedinIn size={25} className="cursor-pointer" />
              <FaFacebook size={25} className="cursor-pointer" />
            </div>
          </div>
        </div>

        <section
          name="about"
          className="h-auto w-full bg-white overflow-hidden"
        >
          <div className="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
            {/* left */}
            <div className="relative">
              <div className="h-full rounded-full overflow-hidden">
                <img
                  className="mx-auto hidden md:block md:w-64 md: lg:w-full"
                  src={ProfilePic}
                  alt=""
                />
              </div>
            </div>
            {/* right */}
            <div className="my-auto flex flex-col gap-3">
              <h1 className="text-5xl text-cyan-950 font-bold">ABOUT ME</h1>
              <h1 className="text-3xl font-medium dark:text-white">
                Better Design
              </h1>
              <h1 className="text-3xl font-medium dark:text-white">
                Better Experience
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur labore quidem, dicta optio consectetur nisi aspernatur
                cumque ullam illum ipsa!
              </p>
              
            </div>
          </div>
        </section>
        

        <section name="skills" className="w-full bg-gradient-to-r from-cyan-950 to-blue-950 sm:items-center">
          <div className="container mx-auto">
            {/* top */}
            <div className="flex flex-col flex-wrap gap-3 items-center">
              <h1 className="text-5xl text-cyan-200 font-bold font mt-28">
                Skills
              </h1>
              <p className="w-1/2 text-center text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi magnam minima est molestias dolorum aspernatur iure
                quos reprehenderit, porro aliquid.
              </p>
            </div>
            {/* bottom */}
            <div className="p-5 sm:p-0 flex flex-wrap justify-between cursor-pointer">
              {/* card */}
              <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
                <img src={Item} alt="" />
              </div>
              {/* Repeat the card divs for each card */}
              {/* card */}
              <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
                <img src={Item} alt="" />
              </div>
              {/* card */}
              <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
                <img src={Item} alt="" />
              </div>
              {/* card */}
              <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
                <img src={Item} alt="" />
              </div>
              
            </div>
          </div>
        </section>

        <section
          name="projects"
          className="h-auto w-full">
          <div className="container mx-auto flex flex-wrap py-20">
            <h2 className="w-full my-12 text-5xl font-bold leading-tight text-center text-black">
              Projects
            </h2>

            <div className="w-full h-auto md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white overflow-hidden shadow border-2 border-black">
            
            <div className="w-full font-bold text-3xl text-gray-800 px-6 mx-auto text-center ">
                   <p className="cursor-default">Project #1</p> 
           </div>
           <img src={Hero} onClick={() => setShowModal(true)} 
           className="mx-auto bg-contain shadow-xl scale-75 rounded-lg hover:scale-95 transition-all cursor-pointer" alt="" />
          
              </div>
              <div className="flex mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <button className="bg-white text-black font-bold py-2 px-4 border border-black rounded-full mx-auto">
              Github
            </button>
              </div>
            </div>


            {/* Modal */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-scroll transition-all cursor-default sm:hidden md:block">
          <div className="flex items-center justify-center min-h-screen w-1/4 mx-auto">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="relative bg-white rounded-lg overflow-hidden">
              <div className="p-8">
                {/* Modal content */}
                <h1 className="text-2xl font-bold mb-4">Project #1</h1>
                <p className="text-gray-700 text-clip overflow-hidden text-justify">Subtitle Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi eveniet perspiciatis exercitationem sunt hic optio.</p>
                <img src={Hero} alt="" />
                <div className="flex">
                <p className="text-gray-700 mt-4 flex-1 text-center">Technologies Used</p>
                <p className="text-gray-700 mt-4 flex-1 font-bold underline">Tailwind CSS & React</p>
                </div>
                <button onClick={() => setShowModal(false)} className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 border-2 hover:text-gray-700 active:border-black ">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      


<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow border-2 border-black">
            
            <div className="w-full font-bold text-3xl text-gray-800 px-6 mx-auto text-center">
            <p className="cursor-default">Project #2</p> 
           </div>
           <img src={Hero} onClick={() => setShowModal(true)} 
           className="bg-contain shadow-xl scale-75 rounded-lg hover:scale-95 transition-all cursor-pointer" alt="" />
          
              </div>
              <div className="flex mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <button className="bg-white text-black font-bold py-2 px-4 border border-black rounded-full mx-auto">
              Github
            </button>
              </div>
            </div>

      
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow border-2 border-black">
            
            <div className="w-full font-bold text-3xl text-gray-800 px-6 mx-auto text-center">
            <p className="cursor-default">Project #3</p> 
           </div>
           <img src={Hero} onClick={() => setShowModal(true)} 
           className="bg-contain shadow-xl scale-75 rounded-lg hover:scale-95 transition-all cursor-pointer" alt="" />
          
              </div>
              <div className="flex mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <button className="bg-white text-black font-bold py-2 px-4 border border-black rounded-full mx-auto">
              Github
            </button>
              </div>
            </div>
      
            
          </div>
        </section>

        <section
          name="contact"
          className="h-5/6 w-full bg-gradient-to-r from-cyan-950 to-blue-950"
        >
          <div className="container mx-auto">
            {/* top */}
            <div className="flex flex-col gap-3 items-center justify-center">
              <h1 className="text-5xl text-cyan-200 font-bold mt-36">
                Contact
              </h1>
              <p className="w-1/2 text-center text-white mb-8">
                Do you have an idea? Let's discuss it and see what we can do
                together.
              </p>


            </div>
            {/* bottom */}
            <div className="w-1/2 mx-auto justify-center text-center text-2xl mb-8">
              
            <p className="text-justify text-white mt-5">Jay Ann Rose Gerente</p>
            <p className="text-justify text-white mt-5">gerente.jayannrose.bscs2021@gmail.com</p>
            <p className="text-justify text-white mt-5">123 Anywhere St., Any City</p>
            <p className="text-justify text-white mt-5">09XXXXXXXXX</p>
            </div>



            <div className="flex justify-center items-center mx-auto space-x-4">
              <FaGithub size={25} className="cursor-pointer text-white" />
              <FaLinkedinIn size={25} className="cursor-pointer text-white" />
              <BiLogoGmail size={25} className="cursor-pointer text-white" />
            </div>
          </div>
        </section>

        <div className="w-full bg-gray-800">
          <div className="container mx-auto py-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-cyan-200">Logo.</span>
            </div>
            <span className="hidden mx-auto md:block font-medium text-white">
              © 2024 Portfolio. Design with ♥️ by Jay Ann Rose Gerente.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gerente;