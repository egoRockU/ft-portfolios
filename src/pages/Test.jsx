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
        <div className="text-center font-bold text-[13px] py-2">
          <h1>JAY ANN ROSE GERENTE</h1>
          <p>Web Designer</p>
        </div>
        <div className="text-center text-[11px]">
          <p>123 Anywhere St., Any City, ST 12345</p>
          <p>09106128058 <span className="font-bold">gerente.jayannrose.bscs2021@gmail.com</span></p>
          <hr className="my-2 border-gray-900" />
        </div>

        <div className="mx-5">
          <p className="text-header text-[11px] font-bold">Career Objective</p>
          <p className="text-[8px] text-justify leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut officia consectetur veritatis officiis repudiandae laboriosam minus! Sunt at quod laboriosam ab quibusdam quidem excepturi, laudantium velit nulla cumque ratione maiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, cumque?</p>
          <hr className="mt-2.5 border-gray-900 w-[100%] mx-auto" />
          <p className="text-header text-[11px] font-bold">Achievements</p>
          <div>  
        <div className=""> 
          <p className="text-[9px] font-bold ">[Title]</p>
          <p className="text-[9px] ">[Date Received]</p>
          <p className="text-[9px] text-justify">Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, similique modi dolorum veniam perferendis, suscipit dignissimos velit qui, earum aut eaque nobis corrupti magnam tempore accusamus dolore pariatur est odit!</p>
          </div>
<div className="mt-2">
<p className="text-[9px] font-bold ">[Title]</p>
          <p className="text-[9px] ">[Date Received]</p>
          <p className="text-[9px] text-justify">Description</p>
          </div>
</div>
          <hr className="my-2 border-gray-900 w-[100%] mx-auto" />
          <p className="text-header text-[11px] font-bold ">Education</p>

      <div>  
        <div className=""> 
          <p className="text-[9px] ">[Degree Program]</p>
          <p className="text-[9px] text-cyan-500 font-semibold">[School Name]</p>
          <p className="text-[9px]">YYYY-YYYY</p>
          </div>
<div className="mt-2">
          <p className="text-[9px]">[Degree Program]</p>
          <p className="text-[9px] text-cyan-500 font-semibold">[School Name]</p>
          <p className="text-[9px]">YYYY-YYYY</p>
          </div>
</div>
          <hr className="my-2 border-gray-900 w-[100%] mx-auto" />

          <p className="text-header text-[11px] font-bold">Projects</p>
          <div>
        <div className="">  <p className="text-[9px] font-bold">[Project Title] <span className="space-x-11">YYYY-YYYY</span></p>
          <p className="text-[9px]  font-semibold">[Subtitle]</p>
          <p className="text-[9px]">[Technologies Used]</p>
          </div>
          <div className="mt-2">  <p className="text-[9px] font-bold">[Project Title] <span className="space-x-11">YYYY-YYYY</span></p>
          <p className="text-[9px] font-semibold">[Subtitle]</p>
          <p className="text-[9px]">[Technologies Used]</p>
          </div>
</div>
          <hr className="my-2 border-gray-900 w-[100%] mx-auto" />

          <p className="text-header text-[11px] font-bold">Certifications</p>
          <div>
        <div className="">
          <p className="text-[9px] font-bold">[Title] <span className="space-x-11">YYYY-YYYY</span></p>
          <p className="text-[9px] font-semibold">[Description]</p>
          </div>
          <div className="mt-2">  <p className="text-[9px] font-bold">[Title] <span className="space-x-11">YYYY-YYYY</span></p>
          <p className="text-[9px] font-semibold">[Description]</p>
          
          </div>
</div>
          <hr className="my-2 border-gray-900 w-[100%] mx-auto" />

          <p className="text-header text-[11px] font-bold">Activities and Involvements</p>
          <div>
        <div className="">  
        <p className="text-[9px] font-bold">[Title/Position] <span className="space-x-11">YYYY-YYYY</span></p>
        <p className="text-[9px]">[Type]</p>
          <p className="text-[9px]">[Company]</p>
          <p className="text-[9px] text-justify">[Description]</p>
          </div>
          <div className="mt-2">  
          <p className="text-[9px] font-bold">[Title/Position] <span className="space-x-11">YYYY-YYYY</span></p>
        <p className="text-[9px]">[Type]</p>
          <p className="text-[9px]">[Company]</p>
          <p className="text-[9px] text-justify">[Description]</p>
          </div>
</div>
<hr className="my-2 border-gray-900 w-[100%] mx-auto" />

          <p className="text-header text-[11px] font-bold">Skills</p>
          <div className="list-container flex gap-12">
            <ul className="left-list text-[9px] flex-1 list-disc">
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
            <ul className="right-list text-[9px] flex-1 list-disc">
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* ---------------------- */}
    </>
  );
}

export default App;
