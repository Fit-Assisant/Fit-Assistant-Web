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
      <NavLink to={"/"}>
        <HomeSVG />
      </NavLink>
      <NavLink to={"/record"}>
        <RecordSVG />
      </NavLink>
      <NavLink to={"/exercises"}>
        <ExercisesSVG />
      </NavLink>
      <NavLink to={"programs"}>
        <ProgramSVG />
      </NavLink>
      <NavLink to={"/account"}>
        <AccountSVG />
      </NavLink>
    </nav>
  );
}

export default Navbar;
