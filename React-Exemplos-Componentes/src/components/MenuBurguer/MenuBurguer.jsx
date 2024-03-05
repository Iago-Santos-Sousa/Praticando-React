import { useState } from "react";
import "./MenuBurguer.css";

const MenuBurguer = () => {
  const [burguerMenu, setBurguerMenu] = useState(false);

  return (
    <button
      className={`${burguerMenu && "active-menu"}`}
      id="btn-menu"
      onClick={() => setBurguerMenu((prev) => !prev)}
    >
      <span className="linha"></span>
      <span className="linha"></span>
      <span className="linha"></span>
    </button>
  );
};

export default MenuBurguer;
