import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAd from "./component/CreateAd";
import Header from "./component/Header";
import AdProfile from "./component/AdProfile";
import Buttons from "./component/Buttons";
function App() {
  return (
   <>
   <Router>
    <Header/>
    <Buttons/>
    <Routes>
    <Route path="/createad" element={<CreateAd />} />

    <Route path="/profile" element={<AdProfile />} />

    </Routes>
   </Router>
   </>
  );
}

export default App;
