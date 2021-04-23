import React, { useState } from "react";

const SearchBar = ({ value, filterUpdate, handleFilter, resetFilter }) => {
  const [filter, setFilter] = useState(false);
  const [outsider, setOutsider] = useState(false);
  const [ageMin, setAgeMin] = useState("");
  const [ageMax, setAgeMax] = useState("");

  const handleChange = (e) => {
    return filterUpdate(e.target.value);
  };

//   const handleUninvolved = (state) => {
//     return setOutsider(!state);
//   };

  const handleReset = () => {
    setAgeMin("0");
    setAgeMax("");
    return resetFilter;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return handleFilter(ageMin, ageMax);
  };

  return (
    <div className="searchBar">
      <div className="searchBar__whitespace" />
      <div className="searchBar__form">
        <label>
          <span />
          <input
            type="text"
            value={value}
            autoComplete="off"
            placeholder="Szukaj po imieniu lub nazwisku"
            onChange={handleChange}
          />
        </label>
        {filter ? (
          <form className="searchBar__filter__options" onSubmit={handleSubmit}>
            {" "}
            Wiek
            <label htmlFor="">
              Od
              <input
                type="text"
                value={ageMin}
                onChange={(e) => setAgeMin(e.target.value)}
              />
            </label>
            <label htmlFor="">
              Do
              <input
                type="text"
                value={ageMax}
                onChange={(e) => setAgeMax(e.target.value)}
              />
            </label>
            {/* <label> */}
            {/* <input type="checkbox" onClick={()=>handleUninvolved(outsider)}>Niezaangażowany</input> */}
            {/* </label> */}
            <button
              className="searchBar__button filter"
              type="reset"
              onClick={handleReset}
            >
              Resetuj
            </button>
            <button className="searchBar__button filter submit" type="submit">
              Filtruj
            </button>
          </form>
        ) : null}
        <span
          className="searchBar__button"
          onClick={() => {
            setFilter(!filter);
          }}
        >
          {filter ? "Ukryj" : "Filtry"}
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
