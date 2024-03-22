import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ReturnsGetter from "./Components/ReturnsGetter";
import TaxForm from "./Components/TaxForm";
import TotalCost from "./Components/TotalCost";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blogs from "./Components/Blogs";
import { useDispatch, useSelector } from "react-redux";
import { totalReturns } from "./redux/Slice";

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

        <ReturnsGetter />
        {numReturns != 0 && <TaxForm />}
        {returncount != null && <TotalCost />}
        {returncount != null && <ContactForm />}

        <Footer />
      </>
    </Router>
  );
}

export default App;
