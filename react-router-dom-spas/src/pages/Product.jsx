import { Link, useLoaderData, useParams } from "react-router-dom";

const Product = () => {
  // useLoaderData(): hook para usar o loader do Router
  const product = useLoaderData();

  // useParams(): hook para usar-mos os parâmetros das rotas, nesse caso o ID de cada produto
  // const { productId } = useParams();

  // if (!product) {
  //   return <h2>Oops.. Esse produto não foi encontrado!</h2>;
  // }

  // throw new Error("Erro qualquer");

  return (
    <section>
      <Link to="/products">
        <button>Voltar</button>
      </Link>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button>Comprar</button>
    </section>
  );
};

export default Product;
