import PropTypes from "prop-types";
import useStock from "../hooks/useStock";
import { useNavigate } from "react-router-dom";

const DeleteButton = ({ itemId, itemName }) => {
  DeleteButton.propTypes = {
    itemId: PropTypes.number,
    itemName: PropTypes.string,
  };

  const { deleteItem } = useStock();

  // hook para redirecionar o usuário ao deletar item
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm(`Tem certeza que deseja excluir ${itemName}?`)) {
      deleteItem(itemId);
      navigate("/items");
    }
  };

  return (
    <button className="button is-danger is-small" onClick={handleDelete}>
      Excluir
    </button>
  );
};

export default DeleteButton;
