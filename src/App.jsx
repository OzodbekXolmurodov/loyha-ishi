import { Routes, Route } from "react-router-dom";
import List from "./pages/list/List";
import Navber from "./pages/navbar/Navber";
import Afish from "./pages/afish/Afish";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

function App() {
  return (
    <Routes>
      {" "}
      {/* Faqat Routes va Route ishlatiladi */}
      <Route path="/" element={<List />}>
        <Route index element={<Home />} /> {/* Default route (Home) */}
        <Route path="/about" element={<About />} />
        <Route path="/chipta" element={<Navber />} />
        <Route path="/afisha" element={<Afish />} />
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
