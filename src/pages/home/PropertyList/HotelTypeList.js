import React, { useState } from "react";
import "./HotelTypeList.css";

const dummy_type = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp"
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg"
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg"
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg"
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg"
  }
];

function HotelTypeList() {
  const [hotelTypeList, setHotelTypeList] = useState(dummy_type);

  return (
    <div>
      <h2 className="type-title">Browser by property type</h2>

      <div className="type-list">
        {hotelTypeList.map((type) => (
          <div key={type.name} className="type-img">
            <a href="#">
              <img src={type.image} alt={type.name} />
            </a>
            <div className="img-text">
              <p>{type.name}</p>
              <p>{type.count + " hotels"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelTypeList;
