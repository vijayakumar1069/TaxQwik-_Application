import React from "react";
import { BrowserRouter as Router, Routes, Route ,useLocation, useLoaderData} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ReturnsGetter from "./Components/ReturnsGetter";
import TaxForm from "./Components/TaxForm";
import TotalCost from "./Components/TotalCost";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import Blogs from "./Components/Blogs";
import { useSelector } from "react-redux";
import { HelpButton } from "./Components/HelpButton";

function App() {
  const numReturns = useSelector((state) => state.returns.numReturns);
  const returncount = useSelector((state) => state.returns.returncount);


  console.log(numReturns, returncount);

  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
    
       
        {numReturns >0 && <TaxForm />}
        {returncount !== null && <TotalCost />}
        {returncount !== null && <ContactForm />}
        <HelpButton/>

        <Footer />
      </>
    </Router>
  );
}

export default App;
