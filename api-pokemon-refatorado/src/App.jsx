/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência
Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id <- parâmetro de url

DICA:
imagem => sprites.front_default
experiência => base_experience
EXTRA: se puder ordene por nome.
*/

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=10")
      .then((response) => {
        // organizando por nomes antes de setar na state setList
        const sortedArray = [...response.data.results];

        sortedArray.sort((a, b) => {
          // função que compara os nomes
          return a.name.localeCompare(b.name);
        });

        // Promise.all();

        const promisesArray = sortedArray.map((item) => {
          // criamos um array com diversas promises
          return axios.get(item.url);
        });

        Promise.all(promisesArray).then((values) => setList(values));

        // console.log({ sortedArray });
        // setList(sortedArray);
      });
  }, []);
  console.log({ list });

  return (
    <>
      <h1>Desafio pokemon</h1>
      <h1>Consumir api pokemon</h1>
      <br />
      {list.lenght === 0 && "carregando pokemons..."}
      {list.map((item) => (
        <Pokemon key={item.data.name} details={item.data} />
      ))}
    </>
  );
}

const Pokemon = ({ details }) => {
  // const [details, setDetails] = useState(null);

  // if (!details) {
  //   return <div>-</div>;
  // }

  // promise all

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={details.sprites.front_default}
        alt=""
        style={{ width: "30px", marginRight: "20px" }}
      />
      <span>
        <b>{details.name}</b> - EXP {details.base_experience} - HP{" "}
        {details.stats[0].base_stat}
      </span>
    </div>
  );
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default App;
