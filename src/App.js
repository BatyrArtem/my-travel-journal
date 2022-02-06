import React from "react";
import Navbar from "./components/Navbar";
import Place from "./components/Place";
import data from "./data.js";

export default function App() {
  
  const dataPlace = data.map(object => 
    <Place 
      key={object.description}
      object={object}
    />)

  return (
    <div>
      <Navbar />
      <section className="place--list">
        {dataPlace}
      </section>
    </div>
  );
}
