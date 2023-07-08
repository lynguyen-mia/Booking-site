import React from "react";
import "./Form.css";
import CalendarRangeInput from "./CalendarRangeInput";
import GuestInput from "./GuestInput";

function Form() {
  function onClickSearchHandler() {
    window.location.assign("/search");
  }

  return (
    <div className="form-input__control">
      <div className="input-icon">
        <i className="fa fa-bed fa-lg"></i>
        <input
          className="input-location"
          type="text"
          name="location"
          placeholder="Where are you going?"
        ></input>
      </div>
      <div className="input-icon">
        <i className="fa fa-calendar fa-lg"></i>
        <CalendarRangeInput />
      </div>
      <div className="input-icon">
        <i className="fa fa-female fa-lg"></i>
        <GuestInput />
      </div>
      <button type="button" className="form-btn" onClick={onClickSearchHandler}>
        Search
      </button>
    </div>
  );
}

export default Form;
