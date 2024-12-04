import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Header from "./componets/header/Header";
import List from "./pages/list/List";
// import Home from "./pages/Home";
// import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h2>404</h2>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;