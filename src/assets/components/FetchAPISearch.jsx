import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "./Pagination";
import GamesAPISearch from "./GamesAPISearch";

function FetchAPISearch() {
  const { search } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prev, setPrev] = useState({});
  const [next, setNext] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const gameSearchUrl = `https://api.rawg.io/api/games?key=2173826c4a9a4f7fabc6bcfdd67008e7&search=${search}&page_size=24`;

  const gameData = (url) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setResults(data.results);
        setLoading(false);
        setPrev(data.previous);

        setNext(data.next);
      })
      .catch((error) => {
        setErrorMessage("There is no result for your search.");
      });
  };
  const onPrevious = () => {
    gameData(prev);
  };
  const onNext = () => {
    gameData(next);
  };

  useEffect(() => {
    gameData(gameSearchUrl);
  }, [results]);

  return (
    <>
      <div className="flex flex-col mx-auto">
        {loading ? (
          <h2 className="h-full w-full flex justify-center items-center text-2xl text-hueso">
            Loading games...
          </h2>
        ) : (
          <div>
            <div>
              <Pagination
                prev={prev}
                next={next}
                onPrevious={onPrevious}
                onNext={onNext}
              />
            </div>
            <div className="w-full my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md2:grid-cols-4">
              <GamesAPISearch
                results={results}
                loading={loading}
                errorMessage={errorMessage}
                prev={prev}
                next={next}
              />
            </div>
            <div>
              <Pagination
                prev={prev}
                next={next}
                onPrevious={onPrevious}
                onNext={onNext}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default FetchAPISearch;
