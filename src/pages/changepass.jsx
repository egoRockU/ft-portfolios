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
    max-width: 12%;
    max-height: 12%;
  }

  .Password-text {
    margin-bottom: 0%;
    color: #444b88;
  }
  
  .Password2 {
    margin-bottom: 27px;
  }

  .Password,
  .Password2 {
    padding: 5px;
    border: 1px solid #444b88;
    width: 270px;
    border-radius: 5px;
  }

  .button {
    padding: 8px 10px;
    background-color: #444b88;
    color: white;
    border: none;
    border-radius: 3px;
    margin-left: 150px;
    font-family: "Montserrat", sans-serif;
  }

  .button:active {
    background-color: #333a66;
  }

  .left-align {
    text-align: left;
    margin-left: -105px;
  }
`;

function PasswordResetPage() {
  return (
    <>
      <style>{styles}</style>
      <div className="box">
        <img className="logo" src={logo} alt="Logo" />

        <h3 className="Password-text">Forgot Password</h3>
        <p>Enter new Password for email@gmail.com</p>
        <p className="left-align">Enter New Password</p>
        <input className="Password" type="password" placeholder="" />
        <p className="left-align">Confirm New Password</p>
        <input className="Password2" type="password" placeholder="" />

        <button className="button">Change Password</button>
      </div>
    </>
  );
}

export default PasswordResetPage;