import { useState } from "react";
import TextInput from "./TextInput";

const NewGameForm = ({ addGame }) => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput id="title" label="Título:" value={title} setValue={setTitle} />
      <TextInput id="cover" label="Capa:" value={cover} setValue={setCover} />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default NewGameForm;
