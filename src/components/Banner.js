import React, { useState } from "react";
import Divider from "../assests/divider.svg";
import Select from "react-select";

const Banner = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const options1 = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const options2 = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const options3 = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="border">
      <div className="banner-grid">
        <nav>
          <div>Post Job</div>
          <hr></hr>
        </nav>

        <div id="department">
          <div>Department:</div>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </div>
        <div id="role">
          <div>Role:</div>
          <input className="roleinput"></input>
        </div>
        <div id="experience">
          <div>Experience:</div>
          <Select
            defaultValue={selectedOption1}
            onChange={setSelectedOption1}
            options={options1}
          />
        </div>
        <div id="deadline">
          <div>Deadline:</div>
          <input type="date" name="dateofbirth" id="dateofbirth"></input>
        </div>

        <div id="jobpostdate">
          <div>Job Post Date:</div>
          <input type="date" name="dateofbirth" id="dateofbirth"></input>
        </div>
        <div id="location">
          <div>Location:</div>
          <input className="roleinput"></input>
        </div>
        <div id="working-hour">
          <div>Working Hour:</div>
          <Select
            defaultValue={selectedOption2}
            onChange={setSelectedOption2}
            options={options2}
          />
        </div>
        <div id="working-days">
          <div>Working Days:</div>
          <input className="roleinput"></input>
        </div>
        <div id="job-type">
          <div>Job Type:</div>
          <Select
            defaultValue={selectedOption3}
            onChange={setSelectedOption3}
            options={options3}
          />
        </div>
        <div id="number-vacancy">
          <div>No. of Vacancy:</div>
          <input className="roleinput"></input>
        </div>
        <div id="salary">
          <div>Salary:</div>
          <input className="roleinput"></input>
        </div>
        <div id="job-post-date">
          <div>Job Post Date:</div>
          <input type="date" name="dateofbirth" id="dateofbirth"></input>
        </div>
        <div id="looking">
          <div>What we are looking for:</div>
          <textarea rows="6" cols="50" name="comment" form="usrform"></textarea>
        </div>
        <div id="doing">
          <div>What you will be doing:</div>
          <textarea rows="6" cols="50" name="comment" form="usrform"></textarea>
        </div>
        <div id="perks">
          <div>Perks & Benifts:</div>
          <textarea rows="6" cols="50" name="comment" form="usrform"></textarea>
        </div>
        <div id="bonus">
          <div>Bonus Points:</div>
          <textarea rows="6" cols="50" name="comment" form="usrform"></textarea>
        </div>
        <footer>
          <button className="post-btn">Post</button>
        </footer>
      </div>
    </div>
  );
};

export default Banner;
