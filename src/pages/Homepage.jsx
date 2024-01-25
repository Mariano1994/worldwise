import { Link } from "react-router-dom";
import PageNav from "../components/PageNav/PageNav";

function Homepage() {
  return (
    <>
      <div>
        <PageNav />
      </div>
      <h1>Worldwise</h1>

      <Link to="/app">Go to App Page</Link>
    </>
  );
}

export default Homepage;
