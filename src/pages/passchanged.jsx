import React from 'react';
import logo from '../images/logo3.png';

const styles = `
  body {
    background-color: #efefef;
    font-family: "Montserrat", sans-serif;
  }

  .box {
    width: 1000px;
    height: 500px;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    padding: 20px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    justify-content: center;
    flex-direction: column;
    right: 0;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .logo {
    max-width: 18%;
    max-height: 18%;
  }

  .text1 {
    margin-bottom: 0px;
  }

  .button {
    background-color: white;
    padding: 5px;
    border: 2px solid gray;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 5px;
  }

  .button:active {
    background-color: #72737b;
  }

  .link {
    font-size: small;
  }
`;

function PasswordChangedPage() {
  return (
    <>
      <style>{styles}</style>
      <div className="box">
        <img className="logo" src={logo} alt="Logo" />
        <h3 className="text1">Your password has been changed</h3>
        <p className="text2">Click the button below to login again</p>
        <button className="button">Login to FirstStep</button>
      </div>
    </>
  );
}

export default PasswordChangedPage;