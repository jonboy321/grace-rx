import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAd from "./component/CreateAd";
import AdProfile from "./component/AdProfile";
import Buttons from "./component/Buttons";
import NavBar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer"

function App() {
  return (
   <>
   <Router>
    <NavBar/>
    <Footer/>
    <Routes>
    <Route path="/createad" element={<CreateAd />} />

    <Route path="/profile" element={<AdProfile />} />

    </Routes>
   </Router>
   </>
  );
}

export default App;
