import React from "react";

const countryDropDown = p => (
  <select
    onChange={e => {
      p.ChangeSelectedCountry(e.target.value);
    }}
  >
    {p.countries.map((elemnt, index) => (
      <option value={elemnt.name} key={index}>
        {elemnt.name}
      </option>
    ))}
  </select>
);

export default countryDropDown;
