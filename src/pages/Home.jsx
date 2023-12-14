import { Link, NavLink } from "react-router-dom";
import { PageNav } from "../components/PageNav/PageNav";

export function Home() {
  return (
    <>
      <div>
        <PageNav />
        <h1>Worldwise</h1>
        <Link to="/app">Go to the app</Link>
      </div>
    </>
  );
}
