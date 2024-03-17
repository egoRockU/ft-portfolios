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
       
       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
             <div className="p-4 sm:p-6">
                 <div className="flex items-center justify-between">
                     <div>
                         <h2 className="text-2xl font-semibold">Javier Ezekiel</h2>
                         <p className="text-sm text-gray-600">Software Engineer</p>
                     </div>
                     <div>
                         <p className="text-sm text-gray-600">Phone: (123) 456-7890</p>
                         <p className="text-sm text-gray-600">Email: javier@example.com</p>
                         <p className="text-sm text-gray-600">Location: Manila Caloocan City, Philippines</p>
                     </div>
                 </div>
                 <hr className="my-4"></hr>
                 <div>
                     <h3 className="text-md font-semibold mb-2">Summary</h3>
                     <p className="text-xs leading-relaxed">Results-oriented as Inter Software Engineer with 1 year of experience
                         designing, developing, and deploying complex software solutions. Proficient in a variety of
                         programming languages and technologies. Proven track record of leading teams and delivering
                         high-quality products.</p>
                 </div>
                 <div className="mt-4">
                     <h3 className="text-md font-semibold mb-2">Experience</h3>
                     <div>
                         <h4 className="text-sm font-semibold">ABC Corporation</h4>
                         <p className="text-sm text-gray-600">Inter Software Engineer | 2021 - Present</p>
                         <ul className="list-disc list-inside text-xs">
                             <li>Lead a team of developers in designing and implementing a scalable microservices
                                 architecture.</li>
                             <li>Developed and maintained critical components of the company's flagship product, resulting
                                 in increased reliability and performance.</li>
                             <li>Collaborated with product managers to define project requirements and timelines.</li>
                         </ul>
                     </div>
                     <div className="mt-4">
                         <h4 className="text-sm font-semibold">XYZ Tech</h4>
                         <p className="text-sm text-gray-600">Intern FronEnd Developer |  2020- 2021</p>
                         <ul className="list-disc list-inside text-xs">
                             <li>Contributed to the development of a cutting-edge mobile application, used by millions of
                                 users worldwide.</li>
                             <li>Implemented continuous integration and deployment pipelines, improving team efficiency
                                 and product quality.</li>
                             <li>Mentored junior engineers and conducted code reviews to ensure adherence to best
                                 practices.</li>
                         </ul>
                     </div>
                 </div>
                 <div className="mt-4">
                     <h3 className="text-sm font-semibold mb-2">Skills</h3>
                     <ul className="list-disc list-inside text-xs">
                         <li>Programming Languages: Java, Python, JavaScript</li>
                         <li>Frameworks & Libraries: Spring Boot, React, Angular</li>
                         <li>Database Systems: MySQL, PostgreSQL, MongoDB</li>
                         <li>Cloud Technologies: AWS, Azure, Google Cloud Platform</li>
                         <li>Agile Methodologies: Scrum, Kanban</li>
                         <li>DevOps Tools: Docker, Kubernetes, Jenkins</li>
                     </ul>
                 </div>
             </div>
         </div>
         </div>
      {/* ---------------------- */}
    </>
  );
}

export default App;
