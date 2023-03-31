import React from "react";
import Divider from "../assests/divider.svg";
import { useHistory } from "react-router-dom";
const NavBar = () => {
  const history = useHistory();
  const nextPage = () => {
    history.push("/applicantInfo");
  };
  const backPage = () => {
    history.push("/");
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
