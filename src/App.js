import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";
import React from "react";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} basename={process.env.PUBLIC_URL} />
        <Route
          path="/search"
          element={<Search />}
          basename={process.env.PUBLIC_URL}
        />
        <Route
          path="/detail"
          element={<Detail />}
          basename={process.env.PUBLIC_URL}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
