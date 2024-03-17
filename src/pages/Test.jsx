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
      <div className="container max-w-[459px] bg-white mx-auto shadow-md my-2 rounded-lg font-serif">
        <div className="text-center font-bold text-[20px] py-2">
          <h1>JAY ANN ROSE GERENTE</h1>
          <p>Web Designer</p>
        </div>
        <div className="text-center text-xs">
          <p>123 Anywhere St., Any City, ST 12345</p>
          <p>09106128058 <span className="font-bold">gerente.jayannrose.bscs2021@gmail.com</span></p>
          <hr className="my-2 border-gray-900" />
        </div>

        <div className="mx-5">
          <p className="text-header text-sm font-bold">Career Objective</p>
          <p className="text-[10px] text-justify leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut officia consectetur veritatis officiis repudiandae laboriosam minus! Sunt at quod laboriosam ab quibusdam quidem excepturi, laudantium velit nulla cumque ratione maiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, cumque?</p>
          <hr className="mt-2.5 border-gray-900 w-[100%] mx-auto" />

          <p className="text-header text-sm font-bold">Achievements</p>
          <div className="list-container flex">
            <ul className="left-list text-[10px] flex-1">
              <li className="list-disc">Lorem, ipsum dolor.</li>
              <li className="list-disc">Lorem, ipsum dolor.</li>
            </ul>
            <ul className="right-list text-[10px] flex-1 list-disc">
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>
          <hr className="my-2 border-gray-900 w-[100%] mx-auto" />

          <p className="text-header text-sm font-bold ">Education</p>
          <strong><p className="text-[10px]">Bachelor of Science in Computer Science</p></strong>
          <p className="text-[10px]">University of Caloocan City <strong>2020-2025</strong></p>
          <hr className="my-2 border-gray-900 w-[100%] mx-auto" />

          <p className="text-header text-sm font-bold">Projects</p>
          <div className="list-container flex">
            <ul className="left-list text-[10px] flex-1 list-disc">
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
            <ul className="right-list text-[10px] flex-1 list-disc">
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>
          <hr className="my-2 border-gray-900 w-[100%] mx-auto" />

          <p className="text-header text-sm font-bold">Certifications</p>
          <div className="list-container flex">
            <ul className="left-list text-[10px] flex-1 list-disc">
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
            <ul className="right-list text-[10px] flex-1 list-disc">
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>
          <hr className="my-2 border-gray-900 w-[100%] mx-auto" />

          <p className="text-header text-sm font-bold">Skills</p>
          <div className="list-container flex">
            <ul className="left-list text-[10px] flex-1 list-disc">
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
            <ul className="right-list text-[10px] flex-1 list-disc">
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
