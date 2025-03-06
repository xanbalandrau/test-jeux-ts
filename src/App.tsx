import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JustePrix from "./components/JustePrix";
import Home from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/justeprix" element={<JustePrix />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
