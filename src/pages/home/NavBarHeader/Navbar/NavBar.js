import React, { useState } from "react";
import NavBarItem from "./NavBarItem";
import "./NavBar.css";

const data = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false
  }
];

function NavBar() {
  const [navBarArr, setNavBarArr] = useState(data);
  function onClickNavItem(item) {
    // find current clicked item in data arr
    const clickedItem = data.find((obj) => obj.type === item.textContent);
    // create a new data arr with clicked item's active value set to true
    const updatedData = data.map((obj) =>
      obj.type === clickedItem.type
        ? { ...obj, active: true }
        : { ...obj, active: false }
    );
    // console.log(clickedItem);
    // console.log(updatedData);
    setNavBarArr(updatedData);
  }

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-name">
          <h2 onClick={() => window.location.assign("./")}>Booking Website</h2>
          <div className="navbar-btn">
            <button type="button">Register</button>
            <button type="button">Login</button>
          </div>
        </div>

        <ul className="navbar-menu">
          {navBarArr.map((item) => (
            <NavBarItem
              onClickItem={onClickNavItem}
              key={item.type}
              type={item.type}
              icon={item.icon}
              active={item.active}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
