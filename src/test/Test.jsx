import downloadPDF from "../utils/downloadPDF";

function Test() {
  const DIV_NAME = "container"; //rename this according to your main div classname

  const handleDownload = () => {
    downloadPDF(DIV_NAME);
  };

  return (
    <>
      <div>
        <button onClick={handleDownload}>TEST</button>
      </div>
      {/* Place your resume here */}

      {/* ---------------------- */}
    </>
  );
}

export default Test;
