import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/favorites" element={<Favorites />} />

          <Route path="/RecipeItem.jsx/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
