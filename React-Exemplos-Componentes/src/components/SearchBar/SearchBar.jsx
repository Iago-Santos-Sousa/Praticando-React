import React, { useRef, useState, useEffect } from "react";
import "./SearchBar.css";
import { pokemonNamesArr } from "./pokemonNamesArr";
import search from "../../assets/search.svg";

const containerStyle = {
  textAlign: "center",
  color: "white",
  padding: "3.2rem",
  maxWidth: "46rem",
  margin: "auto",
};

const inputWrapper = {
  position: "relative",
};

const srOnlyStyle = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0px",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  borderWidth: "0px",
  whiteSpace: "nowrap",
};

const inputStyle = {
  border: "0",
  outline: "none",
  marginTop: "2rem",
  padding: "1rem 1.6rem",
  backgroundColor: "#444448",
  border: "0px",
  width: "100%",
  color: "white",
  fontSize: "1.6rem",
  position: "relative",
};

const searchBoxStyle = {
  border: "0px",
  borderBottomLeftRadius: "0.8rem",
  borderBottomRightRadius: "0.8rem",
  backgroundColor: "#444448",
  width: "100%",
  maxHeight: "300px",
  overflow: "auto",
  color: "white",
  fontSize: "1.6rem",
  position: "absolute",
  textAlign: "left",
  zIndex: 2,
};

const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [dataPokemon, setDataPokemon] = useState("");
  const inputRef = useRef(null);
  const boxSearchRef = useRef(null);

  const handleInput = (e) => {
    const input = e.target.value;
    setDataPokemon(input);

    if (input.length > 0) {
      const filterResults = pokemonNamesArr.filter((value) => {
        return value.toLocaleLowerCase().includes(input.toLocaleLowerCase());
      });

      setResults(filterResults);
    } else {
      setResults([]);
    }
  };

  const handleSelectInput = (e, result) => {
    setDataPokemon(result);
    setResults([]);
  };

  const handleOutsideClick = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      boxSearchRef.current.style.display = "none";
      // console.log("clicou fora do input");
    } else {
      boxSearchRef.current.style.display = "block";
      console.log("clicou dentro do input");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // console.log({ pokemonNamesArr });
  // console.log({ dataPokemon });
  // console.log({ results });

  return (
    <div className="container" style={containerStyle}>
      <div className="input-wrapper" style={inputWrapper}>
        <label htmlFor="filter" className="sr-only" style={srOnlyStyle}>
          Filter
        </label>
        <input
          ref={inputRef}
          id="filter"
          type="text"
          placeholder="Pokemons"
          value={dataPokemon}
          onChange={handleInput}
          style={
            results.length > 0
              ? {
                  ...inputStyle,
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                }
              : { ...inputStyle, borderRadius: "5px" }
          }
        />
        <i className="search-icon">
          <img src={search} alt="" />
        </i>
        <div className="results-box" style={searchBoxStyle} ref={boxSearchRef}>
          <ul>
            {results.map((result, key) => (
              <li key={key} onClick={(e) => handleSelectInput(e, result)}>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
