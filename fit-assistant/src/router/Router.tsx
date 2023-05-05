import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import Exercises from "../pages/Exercises/exercises";
import Categories from "../pages/Categories/categories";
import Category from "../pages/Categories/Detail/categories_detail";
import Programs from "../pages/Programs/programs";
import Account from "../pages/Account/account";
import Navbar from "../components/Navbar/navbar";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/categories"} element={<Categories />} />
        <Route path={"/categories/:id"} element={<Category />} />
        <Route path={"/programs"} element={<Programs />} />
        <Route path={"/account"} element={<Account />} />
        {/* <Route path={"*"} element={<h1>404</h1>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
