import React from "react";
import { useEffect, useState } from 'react'
import heroImage from './assets/hero.png';
import Search from "./components/Search";

function App() {
  // useState
  const [searchTerm, setSearchTerm] = useState("");

  //useEffect
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
          <img src={heroImage} alt="Hero Banner" />
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy
              Without the Hassle
            </h1>

            <Search searchTerm ={searchTerm} setSearchTerm={setSearchTerm} />
          </header>
          <h1 className="text-white">{searchTerm}</h1>
        </div>
      </div>
    </main>
  );
}

export default App;
