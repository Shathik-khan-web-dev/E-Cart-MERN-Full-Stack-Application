import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import ECartNavbar from "./Components/Common/ECartNavbar";
import ProductController from "./Components/Pages/ProductController";
import UserController from "./Components/Pages/UserController";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import ProductUpdate from "./Components/Pages/ProductUpdate";
import UserUpdate from "./Components/Pages/UserUpdate";
import SignUp from "./Components/Pages/SignUp";
import SignIn from "./Components/Pages/SignIn";
import Home from "./Components/Pages/Home";

const App = () => {
  return (
    <Router>
      <div>
        <ECartNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/product" element={<ProductController />} />
          <Route path="/admin/user" element={<UserController />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-update" element={<ProductUpdate />} />
          <Route path="/user-update" element={<UserUpdate />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
