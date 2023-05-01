import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import Exercises from "../pages/Exercises/exercises";
import Programs from "../pages/Programs/programs";
import Account from "../pages/Account/account";
import "./router.css";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className={"sidebar"}>
        <h2>Fit Assistant</h2>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/exercises"}>Exercises</NavLink>
        <NavLink to={"programs"}>Programs</NavLink>
        <NavLink to={"/account"}>Account</NavLink>
      </div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/exercises"} element={<Exercises />} />
        <Route path={"/programs"} element={<Programs />} />
        <Route path={"/account"} element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
