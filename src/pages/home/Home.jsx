import React from "react";
// import HeaderContainer from "./NavBarHeader/HeaderContainer";
import PropertyList from "./PropertyList/PropertyList.js";
import RegisterForm from "./RegisterForm/RegisterForm";
import Footer from "./Footer/Footer";
import NavBar from "./NavBarHeader/Navbar/NavBar.js";
import Header from "../home/NavBarHeader/Header/Header.js";

const Home = () => {
  return (
    <div>
      {/* <HeaderContainer /> */}
      <NavBar />
      <Header />
      <PropertyList />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default Home;
