import React from "react";

import html from "../../img/logohtml.png";
import PHP from "../../img/logo php.png";
import  Reactjs from "../../img/logoreact.png";
import CSS from "../../img/logocss.png";
import Github from "../../img/logogithub.png";
import Tailwind from "../../img/logotailwind.png";
import Sql from "../../img/logosql.png";
import Js from "../../img/logojs.png";
import C from "../../img/logoc++.png";


const Experience = () => {

    const techs = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'

        },

        {
            id:2,
            src: PHP,
            title: 'PHP',
            style: 'shadow-purple-500'

        },

        {
            id:3,
            src: Reactjs,
            title: 'ReactJs',
            style: 'shadow-blue-500'

        },

        {
            id:4,
            src: CSS,
            title: 'CSS',
            style: 'shadow-blue-500'

        },

        {
            id:5,
            src: Github,
            title: 'GITHUB',
            style: 'shadow-gray-500'

        },

        {
            id:6,
            src: Tailwind,
            title: 'Tailwindcss',
            style: 'shadow-sky-400'

        },

        {
            id:7,
            src: Sql,
            title: 'SQL',
            style: 'shadow-violet-400'

        },

        {
            id:8,
            src: Js,
            title: 'JavaScript',
            style: 'shadow-white'

        },

        {
            id:9,
            src: C,
            title: 'C++',
            style: 'shadow-blue-500'

        },

    ]




  return (
    <div name= 'skills' className="bg-gradient-to-b from-gray-800 to-black w-ful h-scree">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills</p>
                <p className="py-6"> These are the technologies I've worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                {
                    techs.map(({ id, src, title, style}) =>(

                        <div key={id}
                          className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>

                        <img src={src} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">{title}</p>
                    </div>

                    ))
                }
            </div>

        </div>
    </div>
  );
};

export default Experience