import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Articles from "./pages/Faq/Articles";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import Article from "./components/article/Article";

function App() {
  const client = new QueryClient();
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  return (
    <>
      <QueryClientProvider client={client}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<ContactUs/>} />
          <Route path="about" element={<AboutUs/>} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/article/:id" element={<Article/>}/>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
