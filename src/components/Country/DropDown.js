import React from "react";
import AppCountryInfo from "./AppCountryInfo";

const countryDropDown = p => (
  <select
    onChange={e => {
      p.ChangeSelectedCountry(e.target.value);
    }}
  >
    {p.countries.map(elemnt => (
      <AppCountryInfo countryName={elemnt.name} countryFlag={elemnt.flag} />
    ))}
  </select>
);

export default countryDropDown;
