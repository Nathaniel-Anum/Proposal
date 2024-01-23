import HomePage from "./Pages/HomePage";
import Yes from "./Pages/Yes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="yes" element={<Yes />} />
      </Routes>
    </Router>
  );
}

export default App;
