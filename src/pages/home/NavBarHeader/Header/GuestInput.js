import React, { useState, useRef, useEffect } from "react";
import "./GuestInput.css";

export default function GuestNumber() {
  const [adult, setAdult] = useState("");
  const [children, setChildren] = useState("");
  const [room, setRoom] = useState("");
  const [openGuest, setOpenGuest] = useState(false);
  const refOne = useRef(null);

  function onChangeAdultHandler(e) {
    setAdult(e.target.value);
  }
  function onChangeChildrenHandler(e) {
    setChildren(e.target.value);
  }
  function onChangeRoomHandler(e) {
    setRoom(e.target.value);
  }

  // Hide when clicking Done button
  function onClickDoneBtnHandler() {
    setOpenGuest((openGuest) => !openGuest);
    // document.querySelector(".input-guest").classList.add("has_number");
  }

  // Hide calendar when pressing esc
  function hideGuestBoxOnEscape(e) {
    if (e.key === "Escape") {
      setOpenGuest((openGuest) => !openGuest);
      // document.querySelector(".input-guest").classList.add("has_number");
    }
  }

  // Hide calendar when clicking outside
  function hideGuestBoxOnClickOutside(e) {
    // console.log(refOne.current);
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpenGuest(false);
      // document.querySelector(".input-guest").classList.add("has_number");
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", hideGuestBoxOnEscape);
    document.addEventListener("click", hideGuestBoxOnClickOutside);
  }, []);

  const GuestInput = (
    <input
      className="input-guest"
      readOnly
      value={
        adult &&
        children &&
        room &&
        `${adult} adult - ${children} children - ${room} room`
      }
      onClick={() => {
        setOpenGuest((openGuest) => !openGuest);
      }}
      placeholder="1 adult - 0 children - 1 room"
    ></input>
  );

  // prettier-ignore
  return (
    <div ref={refOne} className="guest-container">
      {GuestInput}
      {openGuest &&
      <div className="guest-box">
        <div className="guest-box__row">
          <label htmlFor="input-adult">Adults</label>
          <input id="input-adult" type="number" max="30" min="1"  step="1" placeholder='1' onChange={onChangeAdultHandler}
          />
        </div>

        <div className="guest-box__row">
          <label htmlFor="input-children">Childrens</label>
          <input id="input-children" type="number" max="30" min="1" step="1" placeholder='0' onChange={onChangeChildrenHandler}
          />
        </div>

        <div className="guest-box__row">
          <label htmlFor="input-room">Rooms</label>
          <input id="input-room" type="number" max="30" min="1" step="1" placeholder='1' onChange={onChangeRoomHandler}
          />
        </div>
        <button type='button' onClick={onClickDoneBtnHandler} className="DoneBtn">Done</button>
      </div>
      }
    </div>
  )
}
