import React from "react";
import "./Search.css";
import SearchPopup from "./SearchPopUp/SearchPopup";
import SearchList from "./SearchList/SearchList";
import NavBar from "../home/NavBarHeader/Navbar/NavBar";
import Footer from "../home/Footer/Footer";
import RegisterForm from "../home/RegisterForm/RegisterForm.js";

const Search = () => {
  return (
    <div>
      <NavBar />
      <div className="search-container">
        <SearchPopup />
        <SearchList />
      </div>
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default Search;
