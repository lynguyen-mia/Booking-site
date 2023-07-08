import React, { useState } from "react";
import "./CityList.css";

const dummy_city = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp"
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp"
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp"
  }
];

function CityList() {
  const [cityList, setCityList] = useState(dummy_city);

  return (
    <div className="city-list">
      {cityList.map((city) => (
        <a href="#" key={city.name} className="city-img">
          <div className="img-text">
            <p>{city.name}</p>
            <p>{city.subText}</p>
          </div>
          <img src={city.image} alt={city.name} />
        </a>
      ))}
    </div>
  );
}

export default CityList;
