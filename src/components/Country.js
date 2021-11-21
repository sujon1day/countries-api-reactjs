import React from "react";

const Country = (props) => {
  // console.log(props);
  const { flags, name, capital, area, alpha3Code } = props.country;

  const countryCardStyle = {
    padding: "1rem",
    backgroundColor: "cyan",
    boxShadow: "3px 2px 15px 0 gray",
    borderRadius: "1rem",
  };
  const flagStyle = {
    height: "80px",
  };

  return (
    <div style={countryCardStyle}>
      <img style={flagStyle} src={flags.svg} alt="flag" />
      <h3>{name}</h3>
      <p>
        Alpha3Code: <b>{alpha3Code}</b>
      </p>
      <p>
        Capital: <b>{capital}</b>
      </p>
      <p>
        Area: <b>{area}</b>
      </p>
      <button
        onClick={() => props.handleAddCountry(props.country)}
        style={{
          padding: "1rem 3rem",
          fontSize: "1rem",
          backgroundColor: "black",
          color: "white",
          border: "0",
          borderRadius: "1rem",
          cursor: "pointer",
        }}
      >
        Add Country
      </button>
    </div>
  );
};

export default Country;
