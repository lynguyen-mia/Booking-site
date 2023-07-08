import React from "react";
import "./DetailPage.css";

export default function DetailPage(props) {
  return (
    <div className="detail-container">
      <div className="detail-header">
        <div>
          <h1 className="detail-title">{props.name}</h1>
          <p className="detail-address">
            <i className="fa-solid fa-location-dot"></i>
            {props.address}
          </p>
          <p className="detail-distance">{props.distance}</p>
          <p className="detail-price-offer">{props.price}</p>
        </div>
        <button type="button" className="book-btn">
          Reserve or Book Now!
        </button>
      </div>

      <div className="detail-images">
        {props.photos.map((url, index) => (
          <img src={url} alt={props.name} key={index} />
        ))}
      </div>

      <div className="detail-description-price">
        <div className="detail-description">
          <h2 className="detail-title">{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className="detail-price">
          <h2>Perfect for a 9-night stay!</h2>
          <p>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </p>
          <p className="detail-nine-night-price">
            <strong>${props.nine_night_price}</strong> (9 nights)
          </p>
          <button type="button" className="book-btn">
            Reserve or Book Now!
          </button>
        </div>
      </div>
    </div>
  );
}
