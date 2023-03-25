import React from "react";
import Divider from "../assests/divider.svg";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  let navigate = useNavigate();
  const nextPage = () => {
    navigate("/applicantInfo");
  };
  const backPage = () => {
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="tab-name">Assign Roles</div>
      <img src={Divider} alt="Your SVG" className="divider-svg"></img>
      <div className="tab-name" onClick={() => backPage()}>
        Post Job
      </div>
      <img src={Divider} alt="Your SVG" className="divider-svg"></img>
      <div className="applicant-name" onClick={() => nextPage()}>
        View Applicants Info
      </div>
    </div>
  );
};

export default NavBar;
