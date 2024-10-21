import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Routes>
    </Router>
  );
};

export default App;
