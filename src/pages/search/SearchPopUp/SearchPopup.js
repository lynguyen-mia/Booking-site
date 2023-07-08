import React from "react";
import "./SearchPopup.css";
import SearchCalendar from "./SearchCalendar";

export default function SearchPopup() {
  function onChangeMinPriceHandler(e) {}
  function onChangeMaxPriceHandler(e) {}
  function onChangeAdultHandler(e) {}
  function onChangeChildrenHandler(e) {}
  function onChangeRoomHandler(e) {}
  function onClickSearchBtnHandler(e) {}

  return (
    // prettier-ignore
    <form className="search-form-container">
      <h1>Search</h1>
      <div className="form-box">
        <label htmlFor="input-destination">Destination</label>
        <input type="text" id="input-destination" name="destination" className="search_destination" />
      </div>
      <div className="form-box">
        <label htmlFor="search-calendar">Check-in Date</label>
        <SearchCalendar />
      </div>

      <div className="options-box">
      <label>Options</label>
        <div className="options__row">
          <label htmlFor="input-min-price">Min price per night</label>
          <input id="input-min-price" type="number" min="1" onChange={onChangeMinPriceHandler} />
        </div>

        <div className="options__row">
          <label htmlFor="input-max-price">Max price per night</label>
          <input id="input-max-price" type="number" min="1" onChange={onChangeMaxPriceHandler} />
        </div>

        <div className="options__row">
          <label htmlFor="input-adult">Adults</label>
          <input id="input-adult" type="number" max="30" min="1" placeholder="1" onChange={onChangeAdultHandler} />
        </div>

        <div className="options__row">
          <label htmlFor="input-children">Childrens</label>
          <input id="input-children" type="number" max="30" min="1" step="1" placeholder="0" onChange={onChangeChildrenHandler} />
        </div>

        <div className="options__row">
          <label htmlFor="input-room">Rooms</label>
          <input id="input-room" type="number" max="30" min="1" step="1" placeholder="1" onChange={onChangeRoomHandler} />
        </div>
      </div>
        <button type="button" onClick={onClickSearchBtnHandler} className="SearchBtn">Search</button>
    </form>
  );
}
