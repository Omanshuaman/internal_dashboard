import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobPost from "./pages/JobPost";
import Applicant from "./pages/Applicant";

import "./App.css";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobPost />}></Route>
        <Route path="/applicantInfo" element={<Applicant />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
