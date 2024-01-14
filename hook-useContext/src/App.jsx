import { useState } from "react";
import "./App.css";
import UserContext from "./contexts/UserContext";
import UserInfo from "./components/UserInfo";
import Container from "./components/Container";
import Header from "./components/Header";

function App() {
  const user = {
    name: "João",
    email: "joao@gmail.com",
  };

  return (
    <>
      <UserContext.Provider value={user}>
        <Header />
        <h1>Usando Contexto</h1>
        <Container>
          <p>Este é o nosso App com contexto</p>
        </Container>
      </UserContext.Provider>
      <div>{/* Não há acesso ao contexto */}</div>
    </>
  );
}

export default App;
