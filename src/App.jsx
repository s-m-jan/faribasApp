

import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Faq from "./pages/Faq/Faq";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";


function App() {
  const client = new QueryClient();
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap.bundle.js")
  }, [])
  return (
    <>
      <QueryClientProvider client={client}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="faq" element={<Faq />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
