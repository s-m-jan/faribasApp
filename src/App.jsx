import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Faq from "./pages/Faq/Faq";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<ContactUs/>} />
        <Route path="about" element={<AboutUs />} />
        <Route path="faq" element={<Faq/>} />
      </Routes>
    </>
  );
}

export default App;
