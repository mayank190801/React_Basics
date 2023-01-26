import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { Info } from "./Info";

//This is the older way of doing things for sure, let's figure out the new one, and start adapting to that bod boy for sure
//Let's figure this out bro
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
