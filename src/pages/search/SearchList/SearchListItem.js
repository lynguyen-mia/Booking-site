import React from "react";
import "./SearchListItem.css";

export default function SearchListItem(props) {
  function onClickHotelHandler() {
    window.location.assign("./detail");
  }
  return (
    // prettier-ignore
    <div className="search-item-container">
      <img src={props.image_url} alt={props.name} />
      <div className="search-item-details">
        <a onClick={onClickHotelHandler}><h2>{props.name}</h2></a>
        <p>{props.distance} from center</p>
        <span className="search-item-tag">{props.tag}</span>
        <p><strong>{props.description}</strong></p>
        <p>{props.type}</p>
        <p className="free-cancel"><strong>{props.free_cancel ? "Free cancellation" : ""}</strong></p>
        <p className="free-cancel">{props.free_cancel
            ? "You can cancel later, so lock in this great price today!"
            : ""}
        </p>
      </div>
      <div className="item-rating-price">
        <div className="search-item-rating">
          <p>{props.rate_text}</p>
          <div className="item-rate">{props.rate}</div>
        </div>
        <div className="search-item-price">
          <p className="item-price">${props.price}</p>
          <p className="item-tax">Includes taxes and fees</p>
          <button type="button" className="search-item-btn">See availability</button>
        </div>
      </div>
    </div>
  );
}
