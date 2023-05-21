import { NavLink } from "react-router-dom";
import "./navbar.css";
import RecordSVG from "../Svg/record";
import HomeSVG from "../Svg/home";
import ProgramSVG from "../Svg/program";
import ExercisesSVG from "../Svg/exercises";
import AccountSVG from "../Svg/account";

function Navbar() {
  return (
    <nav className={"sidebar"}>
      <h2>Fit Assistant</h2>
      <NavLink to={"/"} className="home-svg">
        <HomeSVG />
      </NavLink>
      {sessionStorage.getItem("LoggedIn") === "true" && (
        <NavLink to={"/session"} className="session-svg">
          <RecordSVG />
        </NavLink>
      )}
      <NavLink to={"/exercises"} className="exercise-svg">
        <ExercisesSVG />
      </NavLink>
      <NavLink to={"programs"} className="program-svg">
        <ProgramSVG />
      </NavLink>
      <NavLink to={"/account"} className="account-svg">
        <AccountSVG />
      </NavLink>
    </nav>
  );
}

export default Navbar;
