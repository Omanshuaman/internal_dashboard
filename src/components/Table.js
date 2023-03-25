import React, { useState } from "react";

function Table() {
  const [filter, setFilter] = useState("");

  function handleFilterChange(event) {
    setFilter(event.target.value.toUpperCase());
  }

  return (
    <>
      <div className="container">
        <input
          type="text"
          id="myInput"
          onChange={handleFilterChange}
          placeholder="JobId"
        />
        <table
          className="table"
          id="myTable"
          data-filter-control="true"
          data-show-search-clear-button="true"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact No.</th>
              <th>Resume URL</th>
              <th>Applied Date</th>
              <th>Job ID</th>
            </tr>
          </thead>
          <tbody>
            <TableRow filter={filter} />
          </tbody>
        </table>
      </div>
    </>
  );
}

function TableRow(props) {
  const rows = [
    {
      name: "Omanshu Aman",
      email: "omanshuaman@gmail.com",
      contact: "5345",
      resume: "lfrefddsFutterkiste",
      appliedDate: "22/07/1997",
      jobId: "1",
    },
    {
      name: "Omanshu Raman",
      email: "odsvdcmanshuaman@gmail.com",
      contact: "4353",
      resume: "Advdv",
      appliedDate: "22/07/1997",
      jobId: "2",
    },
    {
      name: "Himanshu Aman",
      email: "dvdomanshuaman@gmail.com",
      contact: "453",
      resume: "Avdvdv",
      appliedDate: "22/07/1997",
      jobId: "3",
    },
    {
      name: "Deepanshu Raman",
      email: "omadsvnshuaman@gmail.com",
      contact: "234",
      resume: "vddv",
      appliedDate: "22/07/1997",
      jobId: "4",
    },

    {
      name: "Rupanshu Aman",
      email: "dscmanshuaman@gmail.com",
      contact: "78676",
      resume: "vdvdrv",
      appliedDate: "22/07/1997",
      jobId: "5",
    },
  ];

  const filteredRows = rows.filter(
    (row) => row.jobId.toUpperCase().indexOf(props.filter) !== -1
  );

  return filteredRows.map((row, index) => (
    <tr key={index} className={index % 2 === 1 ? "highlight-row" : ""}>
      <td className="vertical-line">{row.name}</td>
      <td className="vertical-line">{row.email}</td>
      <td className="vertical-line">{row.contact}</td>
      <td className="vertical-line">{row.resume}</td>
      <td className="vertical-line">{row.appliedDate}</td>
      <td className="vertical-line">{row.jobId}</td>
    </tr>
  ));
}

export default Table;
