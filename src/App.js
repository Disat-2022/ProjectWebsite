import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Contact from "./components/pages/Contact";
import LoginReg from "./components/auth/LoginReg";
import Forgetpassword from "./components/auth/Forgetpassword";
import Navbar from "./Navbar";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<LoginReg/>} />
          <Route path="/forgetpassword" element={<Forgetpassword/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
