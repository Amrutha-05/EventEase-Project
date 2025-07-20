// src/components/FilterBox/FilterBox.jsx

import { useState } from "react";
import { generateDataOptions, months, years } from "../../utils/DataRender";
import "./FilterBox.css";

const FilterBox = ({ getMonthYear }) => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const monthToRender = () => generateDataOptions(months);
  const yearsToRender = () => generateDataOptions(years);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof getMonthYear === "function") {
      getMonthYear(selectedMonth, selectedYear);
    }
  };

  return (
    <div>
      <form className="filter-card" onSubmit={handleSubmit}>
        <div className="wrapper">
          <div className="date">
            <label htmlFor="month">Month: </label>
            <select value={selectedMonth} onChange={handleMonthChange}>
              {monthToRender()}
            </select>
          </div>
          <div className="date">
            <label htmlFor="year">Year: </label>
            <select value={selectedYear} onChange={handleYearChange}>
              {yearsToRender()}
            </select>
          </div>
        </div>
        <button type="submit" className="find-events-btn">
          Find Events
        </button>
      </form>
    </div>
  );
};

export default FilterBox;
