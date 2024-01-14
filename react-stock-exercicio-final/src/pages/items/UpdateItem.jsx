import { useParams } from "react-router-dom";
import ItemForm from "../../components/ItemForm";
import useStock from "../../hooks/useStock";

const UpdateItem = () => {
  const { getItem } = useStock();
  const { id } = useParams(); // hook para obter o parâmetro da URL

  const item = getItem(id);

  return (
    <>
      <h2>Atualizar item</h2>
      <ItemForm itemToUpdate={item} />
    </>
  );
};

export default UpdateItem;
