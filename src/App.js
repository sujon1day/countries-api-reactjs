import "./App.css";
import { useState, useEffect } from "react";
import Country from "./components/Country";
import Cart from "./components/Cart";

function App() {
  const [country, setCountry] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      });
  }, []);

  const handleAddCountry = (country) => {
    // console.log('Country Added', country);
    const newCart = [...carts, country];
    setCarts(newCart);
  };
  // console.log(cart)

  const cart = {
    boxShadow: "3px 2px 15px 0 gray",
    padding: "1rem",
    marginBottom: "3rem",
  };
  return (
    <div className="app">
      <div style={cart}>
        <h2>Country Loaded: {country.length}</h2>
        <Cart carts={carts}></Cart>
      </div>
      <div className="country">
        {country.map((country) => (
          <Country
            country={country}
            key={country.alpha3Code}
            handleAddCountry={handleAddCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
}

export default App;
