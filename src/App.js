import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// import Header from "./components/Header";
// import Header2 from "./components/Header2";
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Videos from "./pages/Videos";
import Flower from "./pages/Flower";
import BeachVideos from "./pages/BeachVideos";
import MountainVideos from "./pages/MountainVideos";
import NatureVideos from "./pages/NatureVideos";
import CoffeeVideos from "./pages/CoffeeVideos";
import FlowerVideos from "./pages/FlowerVideos";
import Coffee from "./pages/Coffee";
import Beach from "./pages/Beach";
import Nature from "./pages/Nature";
import Mountain from "./pages/Mountain";

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route path="/photos/:id" element={<Photo />} />
        <Route
          path="/videos"
          element={
            <Videos
              search={search}
              setSearch={setSearch}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/search/mountain"
          element={
            <Mountain
              search={search}
              setSearch={setSearch}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/search/nature"
          element={
            <Nature
              search={search}
              setSearch={setSearch}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/search/beach"
          element={
            <Beach
              search={search}
              setSearch={setSearch}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/search/coffee"
          element={
            <Coffee
              search={search}
              setSearch={setSearch}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/search/flower"
          element={
            <Flower
              search={search}
              setSearch={setSearch}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/search/videos/mountain"
          element={
            <MountainVideos
              search={search}
              setSearch={setSearch}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/search/videos/nature"
          element={
            <NatureVideos
              search={search}
              setSearch={setSearch}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/search/videos/beach"
          element={
            <BeachVideos
              search={search}
              setSearch={setSearch}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/search/videos/coffee"
          element={
            <CoffeeVideos
              search={search}
              setSearch={setSearch}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path="/search/videos/flower"
          element={
            <FlowerVideos
              search={search}
              setSearch={setSearch}
              page={page}
              setPage={setPage}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
