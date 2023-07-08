import React, { useState } from "react";
import "./HotelList.css";
import { Link } from "react-router-dom";

const dummy_hotels = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp"
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg"
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg"
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg"
  }
];

function HotelList() {
  const [hotelList, sethotelList] = useState(dummy_hotels);

  return (
    <div>
      <h2 className="hotel-title">Home guests love</h2>

      <div className="hotel-list">
        {hotelList.map((hotel) => (
          <div href="" key={hotel.name} className="hotel-img">
            <div className="img-text">
              <Link to="/detail" className="img-name">
                {hotel.name}
              </Link>
              <p>{hotel.city}</p>
              <p>
                <strong>{"Starting from $" + hotel.price}</strong>
              </p>
              <div>
                <span className="hotel-rate">{hotel.rate}</span>
                <span>{hotel.type}</span>
              </div>
            </div>
            <a href="#">
              <img src={hotel.image_url} alt={hotel.name} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelList;
