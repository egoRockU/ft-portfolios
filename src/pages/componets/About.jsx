import React from "react";

const About = () => {
  return (
  <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
    w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4
            border-gray-500">About</p>
        </div>
            <p className="text-xl mt-20">
            "Meet Javier Ezekiel, a software virtuoso whose passion for crafting elegant code is matched only by their relentless curiosity for emerging technologies.
             With a knack for turning complex problems into streamlined solutions, Ezikel thrives in the dynamic realm of software development. 
             Whether architecting robust back-end systems or designing intuitive user interfaces, their dedication to excellence shines through in every line of code. 
             Beyond the screen, Ezikel is a collaborator at heart, adept at translating client visions into digital realities. With a commitment to continuous learning and a creative approach to problem-solving, 
             Is not just a developer but a visionary shaping the future of tech, one line of code at a time."
            </p>
            <br />
    </div>

  </div>
  )
}

export default About
