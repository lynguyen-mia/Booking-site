import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";
import React from "react";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          // path="/search"
          element={<Search />}
          path={process.env.PUBLIC_URL + "/search"}
        />
        <Route
          // path="/detail"
          element={<Detail />}
          path={process.env.PUBLIC_URL + "/detail"}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
