// Página roteador

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import AdminHome from "./pages/admin/AdminHome";
import RootLayout from "./pages/RootLayout";
import Product from "./pages/Product";
import loadProduct from "./loaders/products";
import ProductBoundary from "./error-boundaries/ProductBoundary";

const router = createBrowserRouter([
  {
    path: "/", // caminho raiz
    element: <RootLayout />, // elemento associado ao path,

    // children: rotas filhas
    // as rotas filhas herdam da rota pai
    /* Numa interface geralmente temos elementos que se repetem
      Ex: barra lateral, navbar, etc.
      Com as rotas filhas criamos um componente de "layout"
    */
    children: [
      {
        index: true, // Rota inicial
        element: <Home />,
      },
      {
        path: "products", // não precisa colocar barra "/" na frente do caminho
        element: <Products />,
      },

      {
        // Rotas dinâmicas
        path: "products/:productId",
        element: <Product />,
        // Lidando com Data Fetching(dados de API) e Erros
        loader: loadProduct,
        errorElement: <ProductBoundary />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },

  {
    // A rota admin não é filha(children) de <RootLayout/>, por isso não compartilha os componentes.
    path: "/admin",
    element: <AdminHome />,
  },
]);

export default router; // exportamos as rotas(router) para o App.jsx
