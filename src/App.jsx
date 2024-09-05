import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NavBar from "./components/NavBar";
import GameDetailPage from "./pages/GameDetailPage";

function App() {
  return (
    <main className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/game/:id" element={<GameDetailPage />} />
      </Routes>
    </main>
  );
}

export default App;
