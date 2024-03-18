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
      <div className="flex container max-w-[459px] bg-white mx-auto justify-center items-center font-serif">
        <div className="ml-6 flex-1 border-r-2 border-black w-[229px] mt-6">
          
              <img src={picture} alt="profile pic" className="h-[100px] w-[100px] object-cover border-2 border-indigo-500/100 mb-2" />
            <div className="leading-normal">
            <p className="text-[16px] uppercase">Jay Ann Rose</p>
            <p className="text-[16px] font-semibold uppercase">Gerente</p>
            </div>
            <p className="job-description uppercase italic text-[10px]">Web Designer</p>
            <p className="text-[11px] mt-2 underline decoration-solid decoration-indigo-950 font-bold">Contact</p>
            <p className="text-[9px]">123 Anywhere St., Any City</p>
            <p className="text-[9px]">+123-456-7890</p>
            <p className="text-[9px]">gerente.jayannrose.bscs2021@gmail.com</p>
            <hr className="border-gray-600  w-[178px] mt-2"/>
            <p className="text-[11px] mt-1 underline decoration-solid decoration-indigo-950 font-bold">Skills</p>
            <ul className="text-[9px] list-disc">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
            </ul>
            <hr className="border-gray-600  w-[178px] mt-2"/>
            <p className="text-[11px] mt-2 underline decoration-solid decoration-indigo-950 font-bold">Certificates</p>
            <div>
        <div className="">
          <p className="text-[9px] font-bold">[Title] <span className="space-x-11">YYYY-YYYY</span></p>
          <p className="text-[9px] font-semibold">[Description]</p>
          </div>
          <div className="mt-2">  <p className="text-[9px] font-bold">[Title] <span className="space-x-11">YYYY-YYYY</span></p>
          <p className="text-[9px] font-semibold">[Description]</p>
          </div>
          </div>
          <hr className="border-gray-600  w-[178px] mt-2"/>
          <p className="text-[11px] mt-2 underline decoration-solid decoration-indigo-950 font-bold">Achievements</p>
          <div>  
        <div className=""> 
          <p className="text-[9px] font-bold ">[Title]</p>
          <p className="text-[9px] ">[Date Received]</p>
          <p className="text-[9px] text-justify">Description</p>
          </div>
        <div className="mt-2">
            <p className="text-[9px] font-bold ">[Title]</p>
          <p className="text-[9px] ">[Date Received]</p>
          <p className="text-[9px] text-justify">Description</p>
          </div>
        </div>
          </div>

        <div className="flex-1 w-[220px] mx-5">
        <p className="text-[11px] mt-2 underline decoration-solid decoration-indigo-950 font-bold">Career Objective</p>
            <p className="text-justify text-[9px] mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sequi architecto distinctio sed similique! Harum ad dignissimos iusto sunt itaque.</p>
            <hr className="border-gray-600  w-[200px] mt-2"/>
            <p className="text-[11px] mt-2 underline decoration-solid decoration-indigo-950 font-bold">Education</p>
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
<hr className="border-gray-600  w-[200px] mt-2"/>

                 
        <p className="text-[11px] mt-2 underline decoration-solid decoration-indigo-950 font-bold">Activities and Involvements</p>
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
        <hr className="border-gray-600  w-[200px] mt-2"/>

        <p className="text-[11px] mt-2 underline decoration-solid decoration-indigo-950 font-bold">Project</p>
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
        </div>
      </div>
      {/* ---------------------- */}
    </>
  );
}

export default App;