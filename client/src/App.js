import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import ECartNavbar from "./Components/Common/ECartNavbar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import ProductUpdate from "./Components/Pages/ProductUpdate";

const App = () => {

  return (
    <Router>
      <div>
        <ECartNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-update" element={<ProductUpdate />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
