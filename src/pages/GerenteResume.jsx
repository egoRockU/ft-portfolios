import downloadPDF from "./assets/utils/downloadPDF";
// import "./assets/style.css";
import picture from "./assets/picture.png";
import { BiLink } from "react-icons/bi";

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
      <div className="flex container max-w-[459px] bg-white mx-auto border-2 justify-center items-center font-sans">
        <div className="ml-6 flex-1 border-black w-[229px]">
          
              <img src={picture} alt="profile pic" className="h-[100px] w-[100px] object-cover border-5 border-black" />
            <p className="name text-[23px] uppercase">Jay Ann Rose</p>
            <p className="last-name text-[20px] font-semibold uppercase">Gerente</p>
            <p className="job-description uppercase italic text-[16px]">Web Designer</p>
            <h3 className="bg-[#0b192d] text-white rounded-lg p-2 text-center text-sm mt-4">Contact</h3>
            <p className="text-xs mt-2">123 Anywhere St., Any City</p>
            <p className="text-xs">+123-456-7890</p>
            <p className="text-xs">gerente.jayannrose.bscs2021@gmail.com</p>
            <h3 className="bg-[#0b192d] text-white rounded-lg p-2 text-center text-sm tracking-wide mt-4">Skills</h3>
            <ul className="text-xs list-disc">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
            </ul>
            <h3 className="text-header bg-[#0b192d] text-white rounded-lg p-2 text-center text-sm tracking-wide mt-">Certificates</h3>
            <p className="info-skill text-xs mt-2">Lorem, ipsum dolor.<br />
            Lorem, ipsum dolor.<br />Lorem, ipsum dolor.<br />
            Lorem, ipsum dolor.</p>
          
        </div>
        <div className="flex-1 w-[220px] mx-5">
            <h3 className="bg-[#0b192d] text-white rounded-lg p-1.5 w-24 text-sm tracking-wide mt-4">About Me</h3>
            <p className="text-justify text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sequi architecto distinctio sed similique! Harum ad dignissimos iusto sunt itaque.</p>
            <h3 className="right-header bg-[#0b192d] text-white rounded-lg p-2 text-sm tracking-wide mt-4">Education</h3>
            <p className="right-description text-xs"><strong>Bachelor of Computer Science <br />University of Caloocan City</strong></p>
            <p className="right-description text-xs">2020-2025</p>
            <p className="right-description text-xs"><strong>Bachelor of Computer Science</strong></p>
            <p className="right-description text-xs">2020-2025</p>
            <h3 className="right-header bg-[#0b192d] text-white rounded-lg p-2 text-sm tracking-wide mt-4">Academic Achievement</h3>
            <p className="info-achievement text-xs mt-2">Lorem, ipsum dolor.<br />Lorem, ipsum dolor.<br />Lorem, ipsum dolor.<br />Lorem, ipsum dolor.</p>
            <h3 className="right-header bg-[#0b192d] text-white rounded-lg p-2 text-sm tracking-wide mt-4">Project</h3>
            <ul className="mt-2 text-xs">
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
        </div>
      </div>
      {/* ---------------------- */}
    </>
  );
}

export default App;