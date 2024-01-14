import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ProductBoundary = () => {
  // hook que retorna o erro de rota ancestral mais próximo, que pode ser um erro de carregamento/ação ou um erro de renderização. Destina-se a ser chamado de seu ErrorBoundary/errorElement para exibir uma mensagem de erro adequada.
  const error = useRouteError();

  // isRouteErrorResponse: função do React que verifica se é um erro de request
  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <h2>Oops... O seu produto não foi encontrado =(</h2>;
      case 401:
        return <h2>Voçê não está autorizado a ver essa página...</h2>;
      case 400:
        return <h2>Parece que algo deu errado na requisição.</h2>;
      case 500:
        return <h2>Erro interno no servidor.</h2>;
    }
  }

  // se não for um erro de request
  return <h2>Algo deu errado.</h2>;
};

export default ProductBoundary;
