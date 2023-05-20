import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import Exercises from "../pages/Exercises/exercises";
import Exercise from "../pages/Exercises/Detail/exercises_detail";
import Programs from "../pages/Programs/programs";
import Program from "../pages/Programs/Detail/program_detail";
import Account from "../pages/Account/account";
// import Register from "../pages/Account/Register/register";
import Navbar from "../components/Navbar/navbar";
import "./router.css";
import Connexion from "../pages/Account/Connexion/connexion";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/exercises"} element={<Exercises />} />
          <Route path={"/exercises/:id"} element={<Exercise />} />
          <Route path={"/programs"} element={<Programs />} />
          <Route path={"/programs/:id"} element={<Program />} />
          <Route path={"/account"} element={<Account />} />
          {/* <Route path={"*"} element={<h1>404</h1>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
