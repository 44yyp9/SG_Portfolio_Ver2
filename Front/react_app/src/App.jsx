import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import About from "./pages/About";
import Tech from "./pages/Tech";
import Talks from "./pages/Talks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:id" element={<GameDetailPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/tech" element={<Tech />} />
      <Route path="/talks" element={<Talks />} />
    </Routes>
  );
}

export default App;
