import products from "../database.json";

const loadProduct = ({ params }) => {
  const product = products.find((p) => p.id === Number(params.productId));

  if (!product) {
    // lança um erro com a Response, que é própria do navegador para erros de request
    throw new Response("404 Not found", { status: 404 });
  }

  return product;
};

export default loadProduct;
