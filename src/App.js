import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PokemonNames from "./components/PokemonNames";
import Buttons from "./components/Buttons";

function App() {
  // Hooks

  const [pokeApi, setPokeapi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentpage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextApi, setNextapi] = useState([]);
  const [prevApi, setPrevapi] = useState([]);

  //

  // fetch api

  useEffect(() => {
    let cancel;
    axios
      .get(currentPage, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setPokeapi(res.data.results.map((e) => e.name));
        setLoading(false);
        setNextapi(res.data.next);
        setPrevapi(res.data.previous);
      });
    return () => cancel;
  }, [currentPage]);

  //

  if (loading) return "hey boys you have a bad internet";

  // functions

  const goNext = () => {
    setCurrentpage(nextApi);
  };
  const goPrev = () => {
    setCurrentpage(prevApi);
  };

  return (
    <div >
      <PokemonNames pokemons={pokeApi} />
      <Buttons goNext={nextApi ? goNext : null} goPrev={prevApi ? goPrev : null} />
    </div>
  );
}

export default App;
