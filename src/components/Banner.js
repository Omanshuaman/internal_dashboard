import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Banner = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [role, setRole] = useState("");
  const [deadline, setDeadline] = useState("");
  const [jobPostDate, setJobPostDate] = useState("");
  const [location, setLocation] = useState("");
  const [workingDays, setWorkingsDays] = useState("");
  const [educationReq, setEducationReq] = useState("");

  const [numberOfVacancy, setNumberOfVacancy] = useState("");
  const [whatWeAreLookingFor, setWhatWeAreLookingFor] = useState("");
  const [whatYouWillBeDoing, setWhatYouWillBeDoing] = useState("");
  const [bonusPoint, setBonusPoint] = useState("");
  const [perksBenefits, setPerksBenefits] = useState("");
  const [salary, setSalary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const options = [
    { value: "ht", label: "HT & Admin" },
    { value: "engineering", label: "Engineering" },
    { value: "support", label: "Support" },
    { value: "design", label: "Design" },
    { value: "digital-marketing", label: "Digital Marketing" },
  ];

  const options1 = [
    { value: "0", label: "Fresher" },
    { value: "1", label: "1 Year" },
    { value: "2", label: "2 Years" },
    { value: "3", label: "3 Years" },
    { value: "4", label: "4 Years" },
    { value: "5", label: "5 Years" },
    { value: "6", label: "6 Years" },
    { value: "7", label: "7 Years" },
    { value: "8", label: "8 Years" },
    { value: "9", label: "9 Years" },
    { value: "10", label: "10+ Years" },
  ];

  const options2 = [
    { value: "9-5", label: "9-5" },
    { value: "10-6", label: "10-6" },
    { value: "10-8", label: "10-8" },
    { value: "12-9", label: "12-9" },
  ];

  const options3 = [
    { value: "fulltime", label: "Full Time" },
    { value: "parttime", label: "Part Time" },
    { value: "contract", label: "Contract" },
  ];

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleDeadlineChange = (event) => {
    const selectedDate = event.target.value;
    const [year, month, day] = selectedDate.split("-");
    const formattedDate = `${day}-${month}-${year}`;
    setDeadline(formattedDate);
    console.log(formattedDate);
  };

  const handleJobPostDateChange = (event) => {
    const selectedDate = event.target.value;
    const [year, month, day] = selectedDate.split("-");
    const formattedDate = `${day}-${month}-${year}`;
    setJobPostDate(formattedDate);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleWorkingDays = (event) => {
    setWorkingsDays(event.target.value);
  };
  const handleNumberOfVacancyChange = (event) => {
    setNumberOfVacancy(event.target.value);
  };

  const handleWhatWeAreLookingForChange = (event) => {
    setWhatWeAreLookingFor(event.target.value);
  };

  const handleWhatYouWillBeDoingChange = (event) => {
    setWhatYouWillBeDoing(event.target.value);
  };

  const handleBonusPointChange = (event) => {
    setBonusPoint(event.target.value);
  };

  const handlePerksBenefitsChange = (event) => {
    setPerksBenefits(event.target.value);
  };

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };
  const handleEducationChange = (event) => {
    setEducationReq(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = {
      id: uuidv4(),
      department: selectedOption.value,
      role: role,
      experience: selectedOption1.value,
      deadline: deadline,
      job_post_date: jobPostDate,
      location: location,
      working_hour: selectedOption2.value,
      working_days: workingDays,
      job_type: selectedOption3.value,
      number_of_vacancy: numberOfVacancy,
      education_requirement: educationReq,

      what_we_are_looking_for: whatWeAreLookingFor,
      what_you_will_be_doing: whatYouWillBeDoing,
      bonus_point: bonusPoint,
      perks_benefits: perksBenefits.split(","),
      salary: salary,
    };

    try {
      const response = await axios.post(
        "https://nt4k05fl8k.execute-api.us-east-1.amazonaws.com/prod/jobpost",
        formData
      );
      console.log(response.data);
      // Do something with the response data
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="border">
      <div className="banner-grid">
        <nav>
          <div>Post Job :</div>
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
          <input className="roleinput" onChange={handleRoleChange}></input>
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
          <input
            type="date"
            name="dateofbirth"
            id="dateofbirth"
            onChange={handleDeadlineChange}
          ></input>
        </div>

        <div id="jobpostdate">
          <div>Job Post Date:</div>
          <input
            type="date"
            name="dateofbirth"
            id="dateofbirth"
            onChange={handleJobPostDateChange}
          ></input>
        </div>
        <div id="location">
          <div>Location:</div>
          <input className="roleinput" onChange={handleLocationChange}></input>
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
          <input className="roleinput" onChange={handleWorkingDays}></input>
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
          <input
            className="roleinput"
            onChange={handleNumberOfVacancyChange}
          ></input>
        </div>
        <div id="salary">
          <div>Salary:</div>
          <input className="roleinput" onChange={handleSalaryChange}></input>
        </div>
        <div id="job-post-date">
          <div>Education Requirement:</div>
          <input className="roleinput" onChange={handleEducationChange}></input>
        </div>
        <div id="looking">
          <div>
            What we are looking for: <h6>(use * for new line)</h6>
          </div>
          <textarea
            rows="6"
            cols="50"
            name="comment"
            form="usrform"
            onChange={handleWhatWeAreLookingForChange}
          ></textarea>
        </div>
        <div id="doing">
          <div>
            What you will be doing: <h6>(use * for new line)</h6>
          </div>
          <textarea
            rows="6"
            cols="50"
            name="comment"
            form="usrform"
            onChange={handleWhatYouWillBeDoingChange}
          ></textarea>
        </div>
        <div id="perks">
          <div>
            Perks & Benefits: <h6>(use * for new line)</h6>
          </div>
          <textarea
            rows="6"
            cols="50"
            name="comment"
            form="usrform"
            onChange={handlePerksBenefitsChange}
          ></textarea>
        </div>
        <div id="bonus">
          <div>
            Bonus Points: <h6>(use * for new line)</h6>
          </div>
          <textarea
            rows="6"
            cols="50"
            name="comment"
            form="usrform"
            onChange={handleBonusPointChange}
          ></textarea>
        </div>
        <footer>
          {isLoading && <div className="loader"></div>}
          <button
            className="post-btn"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Posting..." : "Post"}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Banner;
