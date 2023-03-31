import { Route } from "react-router-dom";
import JobPost from "./pages/JobPost";
import Applicant from "./pages/Applicant";
import "./App.css";

import "./App.css";

function App() {
  return (
    <div>
      <Route path="/" component={JobPost} exact />
      <Route path="/:applicantInfo" component={Applicant} />
    </div>
  );
}
export default App;
