import downloadPDF from "./assets/utils/downloadPDF";
// import "./assets/style.css";
import picture from "./assets/picture.png";

function App() {
  const DIV_NAME = "container";

  const handleDownload = () => {
    downloadPDF(DIV_NAME);
  };

  return (
    <>
      <div>
        <button onClick={handleDownload}>TEST</button>
      </div>
      {/* Place your resume here */}
      <div className="container max-w-[459px] bg-white mx-auto pb-4 shadow-md my-2 rounded-lg font-serif">
             
             <div className="p-4 sm:p-6">
                 <div className="flex items-center justify-between">
                     <div>
                         <h2 className="text-2xl font-bold">Javier Ezekiel</h2>
                         <p className="text-xs text-gray-600">Software Engineer</p>
                     </div>
                     <div>
                         <p className="text-[10px] text-gray-600">Phone: (123) 456-7890</p>
                         <p className="text-[10px] text-gray-600">Email: javier@example.com</p>
                         <p className="text-[10px] text-gray-600">Location: Manila Caloocan City, Philippines</p>
                     </div>
                 </div>
                 <hr className="my-4 border-gray-700 w-[100%] mx-auto"></hr>
                 <div>
                     <h3 className="text-md font-bold mb-2">Summary</h3>
                     <p className="text-xs leading-relaxed">Results-oriented as Inter Software Engineer with 1 year of experience
                         designing, developing, and deploying complex software solutions. Proficient in a variety of
                         programming languages and technologies. Proven track record of leading teams and delivering
                         high-quality products.</p>
                 </div>
                 <div className="mt-4">
                     <h3 className="text-md font-bold mb-2">Activities and Involvements</h3>
                     <div>
                         <h4 className="text-sm font-semibold">ABC Corporation</h4>
                         <p className="text-sm text-gray-700">Inter Software Engineer | 2021 - Present</p>
                         <ul className="list-disc list-inside text-xs">
                             <li>Lead a team of developers in designing and implementing a scalable microservices
                                 architecture.</li>
                             <li>Collaborated with product managers to define project requirements and timelines.</li>
                         </ul>
                     </div>
                     <div className="mt-5">
                         <h4 className="text-sm font-semibold">XYZ Tech</h4>
                         <p className="text-sm text-gray-700">Intern FronEnd Developer |  2020- 2021</p>
                         <ul className="list-disc list-inside text-xs">
                             <li>Contributed to the development of a cutting-edge mobile application, used by millions of
                                 users worldwide.</li>
                             <li>Implemented continuous integration and deployment pipelines, improving team efficiency
                                 and product quality.</li>
                             
                         </ul>
                     </div>
                     </div>

                     <div className="mt-4">
                     <hr className="my-3 border-gray-700 w-[100%] mx-auto" />
                     <h3 className="text-md font-bold mb-2">Education</h3>
                     <div>
                     <div>  
                         <div className=""> 
                          <p className="text-sm  text-gray-700 ">Univesity School</p>
                     <p className="text-xs text-red-600 font-semibold">Computer Program</p>
                      <p className="text-[10px]">2024-2021</p>
                    </div>
                    <div className="mt-5">
                 <p className="text-sm  text-gray-700">School Name</p>
                <p className="text-xs text-red-600 font-semibold">Degree Program</p>
                 <p className="text-[10px]">YYYY-YYYY</p>
              </div>
              <div className="mt-5">
                 <p className="text-sm  text-gray-700">School Name</p>
                <p className="text-xs text-red-600 font-semibold">Degree Program</p>
                 <p className="text-[10px]">YYYY-YYYY</p>
              </div>
            </div>
            </div>
             </div>

                     <div className="mt-5">
                    <hr  className="my-3 border-gray-700 w-[100%] mx-auto"></hr>
                     <p className="text-header text-md font-bold mb-2">Achievements</p>
                         <div>  
                     <div className=""> 
                    <p className="text-xs font-bold  text-gray-800 ">Title</p>
                    <p className="text-xs  text-gray-700">Date Received</p>
                    <p className="text-xs text-justify">Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, similique modi dolorum veniam perferendis, suscipit dignissimos velit qui, earum aut eaque nobis corrupti magnam tempore accusamus dolore pariatur est odit!</p>
                    </div>
                     <div className="mt-2">
                    <p className="text-xs  text-gray-800 font-bold ">Title</p>
                     <p className="text-xs  text-gray-700">Date Received</p>
                    <p className="text-xs text-justify">Description</p>
                    </div>
                    </div>
                     </div>

                     <div className="mt-5">
                     <hr  className="my-3 border-gray-700 w-[100%] mx-auto"></hr>
                         <div>
                         <p className="text-header text-md font-bold mb-2">Projects</p>
                         <div className="mt-4">  <p className="text-sm  text-gray-800 font-bold">Project Title <span className="space-x-11">YYYY-YYYY</span></p>
                     <p className="text-xs  text-gray-700 font-semibold">Subtitle</p>
                     <p className="text-[10px]">Language Used</p>
                </div>
                    <div className="mt-4">  <p className="text-sm  text-gray-800 font-bold">E- Commerce<span className="space-x-15">2022-2023</span></p>
                    <p className="text-xs  text-gray-700 font-semibold">Website Design Project</p>
                    <p className="text-[10px]">Design a personal web site using HTML and CSS</p>
                 </div>
                </div>
                </div>

                <div className="mt-5">
                <hr className="my-4 border-gray-700 w-[100%] mx-auto" />

               <p className="text-header text-md font-bold mb-2">Certifications</p>
                 <div>
                      <div className="">
                      <p className="text-sm  text-gray-800 font-bold">Title<span className="space-x-11">YYYY-YYYY</span></p>
                     <p className="text-xs  text-gray-700 font-semibold">Description</p>
                          </div>
                   <div className="mt-4">  <p className="text-sm text-gray-800 font-bold">Title <span className="space-x-11">YYYY-YYYY</span></p>
                   <p className="text-xs  text-gray-700 font-semibold">Description</p>

                    </div>
                   </div>
                </div>

                 <div className="mt-5">
                     <h3 className="text-sm  text-gray-800 font-bold mb-2">Skills</h3>
                     <ul className="list-disc list-inside text-xs">
                         <li>Programming Languages: Java, Python, JavaScript</li>
                         <li>Frameworks & Libraries: Spring Boot, React, Angular</li>
                         <li>Database Systems: MySQL, PostgreSQL, MongoDB</li>
                         <li>Agile Methodologies: Scrum, Kanban</li>
                         
                     </ul>
                 </div>

                 <div className="mt-4">
                 <hr className="my-4 border-gray-700 w-[100%] mx-auto" />
                     <h3 className="text-md font-bold mb-2">References</h3>
                     <div>
                     <div>  
                         <div className=""> 
                          <p className="text-sm  text-gray-800 ">Marisa De Ocampo</p>
                     <p className="text-xs text-gray-700 font-semibold">Sofware Engineering Manager</p>
                     <p className="text-xs text-gray-700 font-semibold">555. Pasay Metro Manila</p>
                     <p className="text-[10px]">09223344556</p>
                      <p className="text-[10px]">Marisa was my Manager from 2020-2021</p>
                    </div>
                    <div className="mt-5">
                    <p className="text-sm  text-gray-800 ">Jerry Martin</p>
                     <p className="text-xs text-gray-700 font-semibold">Sofware Developer </p>
                     <p className="text-xs text-gray-700 font-semibold">555. Pasay Metro Manila</p>
                     <p className="text-[10px]">09223344556</p>
                      <p className="text-[10px]">Jerry was my Mentor from 2021-2023</p>
              </div> 
            </div>
            </div>
             </div>
             </div>
         </div>
      {/* ---------------------- */}
    </>
  );
}

export default App;
