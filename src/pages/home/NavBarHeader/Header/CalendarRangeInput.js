import React, { useState, useRef, useEffect } from "react";
import "./CalendarRangeInput.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function CalendarRange() {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection"
    }
  ]);

  // console.log(range);
  const startDate = range[0].startDate?.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });

  const endDate = range[0].endDate?.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });

  const CalendarInput = (
    <input
      value={
        startDate && endDate ? `${startDate} to ${endDate || startDate}` : ""
      }
      className="input-calendar"
      readOnly
      onClick={() => setOpen((open) => !open)}
      placeholder="04/07/2023 to 04/07/2023"
    />
  );

  const CalendarBox = (
    <DateRange
      className="calendar-range"
      editableDateInputs={true}
      onChange={(item) => {
        setRange([item.selection]);
      }}
      moveRangeOnFirstSelection={false}
      ranges={range}
    />
  );

  // Hide calendar when pressing esc
  function hideCalendarOnEscape(e) {
    if (e.key === "Escape") {
      setOpen((open) => !open);
    }
  }

  // Hide calendar when clicking outside
  function hideCalendarOnClickOutside(e) {
    // console.log(ref.current);
    // console.log(e.target);
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", hideCalendarOnEscape);
    document.addEventListener("click", hideCalendarOnClickOutside);
  }, []);

  return (
    <div ref={ref}>
      {CalendarInput}
      {open && CalendarBox}
    </div>
  );
}
