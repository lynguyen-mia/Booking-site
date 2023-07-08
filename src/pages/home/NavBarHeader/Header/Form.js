import React from "react";
import "./Form.css";
import CalendarRangeInput from "./CalendarRangeInput";
import GuestInput from "./GuestInput";
import { Link } from "react-router-dom";

function Form() {
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
      <Link to="/search">
        <button type="button" className="form-btn">
          Search
        </button>
      </Link>
    </div>
  );
}

export default Form;
