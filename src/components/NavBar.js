import React from "react";
import Divider from "../assests/divider.svg";
import { useHistory, useLocation } from "react-router-dom";
const NavBar = () => {
  const history = useHistory();
  const location = useLocation();
  const nextPage = () => {
    history.push("/viewApplicants");
  };
  const jobPage = () => {
    history.push("/");
  };
  const assignPage = () => {
    history.push("/assignRoles");
  };
  return (
    <div className="navbar">
      <div
        className={`tab-name ${
          location.pathname === "/assignRoles" ? "selected" : ""
        }`}
        onClick={() => assignPage()}>
        Assign Roles
      </div>
      <img src={Divider} alt="Your SVG" className="divider-svg" />
      <div
        className={`tab-name ${location.pathname === "/" ? "selected" : ""}`}
        onClick={() => jobPage()}>
        Post Job
      </div>
      <img src={Divider} alt="Your SVG" className="divider-svg" />
      <div
        className={`applicant-name ${
          location.pathname === "/viewApplicants" ? "selected" : ""
        }`}
        onClick={() => nextPage()}>
        View Applicants Info
      </div>
    </div>
  );
};

export default NavBar;
