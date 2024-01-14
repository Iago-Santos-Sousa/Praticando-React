/* Crie um componente React de área de comentários onde deverá ser possível preencher e ler comentários como nas imagens abaixo.

O formulário de preenchimento deverá ter um campo para o email e outro para o comentário e, após ser submetido, deverá salvar o comentário do usuário em um estado e exibir o seu conteúdo na tela logo abaixo. Os comentários deverão estar ordernados do mais recente para o mais antigo.

Além disso, se não houver nenhum comentário uma mensagem deverá ser exibida como na imagem abaixo. */

import { useState } from "react";

function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      createdAt: new Date(),
    };

    setComments((state) => [newComment, ...state]);
    setAuthor("");
    setContent("");
  };

  return (
    <>
      <div id="app">
        <h2>Feed de comentários</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="author">Email</label>
          <input
            type="email"
            id="author"
            required
            value={author}
            onChange={(ev) => setAuthor(ev.target.value)}
          />
          <label htmlFor="content">Comentário</label>
          <textarea
            id="content"
            cols="30"
            rows="6"
            required
            value={content}
            onChange={(ev) => setContent(ev.target.value)}
          ></textarea>
          <button type="submit">Enviar formulário</button>
        </form>
        <hr />
        <section id="comments">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id}>
                <h3>{comment.author}</h3>
                <span>Em {comment.createdAt.toLocaleString()}</span>
                <p>{comment.content}</p>
              </div>
            ))
          ) : (
            <p>Seja o primeiro a comentar:</p>
          )}
        </section>
      </div>
    </>
  );
}

export default App;
