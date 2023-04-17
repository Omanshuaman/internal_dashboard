import { Route } from "react-router-dom";
import JobPost from "./pages/JobPost";
import Applicant from "./pages/Applicant";
import UpdatePostings from "./pages/UpdatePostings";

import "./App.css";

import "./App.css";

function App() {
  return (
    <div>
      <Route path="/" component={JobPost} exact />
      <Route path="/viewApplicants" component={Applicant} />
      <Route path="/updatePostings" component={UpdatePostings} />
    </div>
  );
}
export default App;
