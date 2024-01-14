// Componente(estrutura) que se repetira em todas as páginas.
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      {/* Como o Header está em todas as páginas */}
      <Header />
      <main>
        <p>
          Esse é o lauout principal. Abaixo está o conteúdo dinâmico de cada
          rota
        </p>
        <hr />
        {/* Repare que podemos escolher exatamente onde queremos que os filhos apareçam na tela através do componente especial <Outlet /> do React Router. */}
        <Outlet />
      </main>
      <hr />
      <footer>
        <p>Feito com React Router DOM</p>
      </footer>
    </>
  );
};

export default RootLayout;
