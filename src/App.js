import React, { useState } from "react";
import "./App.css";
import { cards } from "./components/data.js";
import Card from "./Card";

function App() {
  const [search, setSearch] = useState("");
  const [val, setVal] = useState("");
  const [price, setPrice] = useState("");

  const years = [
    "1967",
    "1986",
    "1990",
    "1993",
    "1997",
    "1999",
    "2001",
    "2002",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
  ];

  const filterData = (cards) => {
    return search.toLowerCase() === ""
      ? cards
      : cards.make.toLowerCase().includes(search.toLowerCase()) ||
          cards.model.toLowerCase().includes(search.toLowerCase());
  };

  const filterYear = (cards) => {
    return val === "" ? cards : cards.year === parseInt(val);
  };
  const sortPrice = (card1, card2) => {
    if (price === "") return;
    else if (price === "Lowest")
      return parseInt(card1.price) - parseInt(card2.price);
    else return parseInt(card2.price) - parseInt(card1.price);
  };

  return (
    <div className="App">
      <div className="header">
        <div class="input-box">
          <i class="uil uil-search"></i>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Make Name/Model Name..."
          />
        </div>
        <div className="dropDowns">
          <input
            className="drop1"
            list="years"
            onChange={(e) => setVal(e.target.value)}
            placeholder="Year"
          />
          <datalist id="years">
            {years.map((e) => (
              <option>{e}</option>
            ))}
          </datalist>
          {/* <button onClick={(ascend = -1)}>Price: Low---{">"}high</button>
          <button onClick={(ascend = 1)}>Price: High--{">"}Low</button> */}
          <input
            className="button"
            list="priceList"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="price"
          />
          <datalist id="priceList">
            <option>Lowest</option>
            <option>Highest</option>
          </datalist>
        </div>
      </div>

      {cards
        .filter(filterData)
        .filter(filterYear)
        .sort(sortPrice)
        .map((e) => (
          <div className="block">
            <Card
              img={e.img}
              year={e.year}
              make={e.make}
              model={e.model}
              price={e.price}
            />
          </div>
        ))}
    </div>
  );
}

export default App;
