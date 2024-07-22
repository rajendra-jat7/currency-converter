import React from "react";

const DateSelector = ({ date, handleDateChange }) => {
  return (
    <input
      type="date"
      value={date}
      onChange={(e) => handleDateChange(e.target.value)}
    />
  );
};

export default DateSelector;
