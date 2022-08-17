import React, { useEffect, useState } from "react";
import axios from "axios";
import GamesAPI from "../components/GamesAPI";
import Pagination from "../components/Pagination";

function TestAPI() {
  const [games, setGames] = useState([]);
  const [prev, setPrev] = useState({});
  const [next, setNext] = useState({});
  const [search, setSearch] = useState("");
  const initialUrl =
    "https://api.rawg.io/api/games?key=2173826c4a9a4f7fabc6bcfdd67008e7";

  const ApiData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results);
        setPrev(data.previous);
        setNext(data.next);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let results = [];
  if (!search) {
    results = games;
  } else {
    results = games.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  const onPrevious = () => {
    ApiData(prev);
  };
  const onNext = () => {
    ApiData(next);
  };
  const searcher = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    ApiData(initialUrl);
  }, []);

  return (
    <>
      <input
        className="rounded-lg border-none mx-2 text-left"
        placeholder="Buscar"
        type="text"
        value={search}
        onChange={searcher}
      />
      <Pagination
        prev={prev}
        next={next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <GamesAPI results={results} />
    </>
  );
}

export default TestAPI;
