import { Routes, Route } from "react-router-dom";
import List from "./pages/list/List";
import Navber from "./pages/navbar/Navber";
import Afish from "./pages/afish/Afish";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Dtail from "./pages/dtail/Dtail";
import Sorch from "./pages/sorch/Sorch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chipta" element={<Navber />} />
        <Route path="/afisha" element={<Afish />} />
        <Route path="/sorch" element={<Sorch />} />

        <Route path="/movie/:id" element={<Dtail />} />
      </Route>
      <Route
        path="*"
        element={
          <div>
            <h2>404: Sahifa topilmadi</h2>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
