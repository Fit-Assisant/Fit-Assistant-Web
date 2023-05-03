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
        <NavLink to={"/"}>
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.77777 11.0507C5.77777 10.5202 5.98848 10.0115 6.36356 9.63644L11.2929 4.70711C11.6834 4.31658 12.3166 4.31658 12.7071 4.70711L17.6364 9.63644C18.0115 10.0115 18.2222 10.5202 18.2222 11.0506V18C18.2222 19.1046 17.3268 20 16.2222 20H12H7.77777C6.6732 20 5.77777 19.1046 5.77777 18V11.0507Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Home</p>
        </NavLink>
        <NavLink to={"/exercises"}>
          <svg
            version="1.1"
            width="50px"
            height="50px"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path
                d="M141.698,141.549H79.077c-8.488,0-15.37,6.882-15.37,15.362v198.179c0,8.479,6.882,15.362,15.37,15.362h62.622
		c8.489,0,15.371-6.883,15.371-15.362V156.911C157.07,148.431,150.187,141.549,141.698,141.549z"
              />
              <path
                d="M32.374,189.734H12.803C5.736,189.734,0,195.47,0,202.537v106.925c0,7.068,5.736,12.803,12.803,12.803h19.571
		c7.067,0,12.803-5.736,12.803-12.803V202.537C45.177,195.47,39.441,189.734,32.374,189.734z"
              />
              <rect x="177.69" y="228.894" width="156.62" height="54.212" />
              <path
                d="M432.922,141.549h-62.621c-8.488,0-15.371,6.882-15.371,15.362v198.179c0,8.479,6.882,15.362,15.371,15.362
		h62.621c8.488,0,15.371-6.883,15.371-15.362V156.911C448.293,148.431,441.411,141.549,432.922,141.549z"
              />
              <path
                d="M499.197,189.734h-19.57c-7.068,0-12.803,5.736-12.803,12.803v106.925c0,7.068,5.736,12.803,12.803,12.803
		h19.57c7.068,0,12.803-5.736,12.803-12.803V202.537C512,195.47,506.264,189.734,499.197,189.734z"
              />
            </g>
          </svg>
          <p>Exercises</p>
        </NavLink>
        <NavLink to={"programs"}>
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 12H15"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 16H15"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle cx="9" cy="12" r="1" fill="#000000" />
            <circle cx="9" cy="16" r="1" fill="#000000" />
          </svg>
          <p>Programs</p>
        </NavLink>
        <NavLink to={"/account"}>
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h48v48H0z" fill="none" />
            <g id="Shopicon">
              <path
                d="M31.278,25.525C34.144,23.332,36,19.887,36,16c0-6.627-5.373-12-12-12c-6.627,0-12,5.373-12,12
		c0,3.887,1.856,7.332,4.722,9.525C9.84,28.531,5,35.665,5,44h38C43,35.665,38.16,28.531,31.278,25.525z M16,16c0-4.411,3.589-8,8-8
		s8,3.589,8,8c0,4.411-3.589,8-8,8S16,20.411,16,16z M24,28c6.977,0,12.856,5.107,14.525,12H9.475C11.144,33.107,17.023,28,24,28z"
              />
            </g>
          </svg>
          <p>Account</p>
        </NavLink>
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
