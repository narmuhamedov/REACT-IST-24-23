import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostsContext } from '../App';


export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const { addPost } = useContext(PostsContext);

  const submit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      body,
      userId: 1,
      id: Date.now() // временный ID
    };

    addPost(newPost); // оптимистично обновляем UI

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ title, body, userId: 1 })
    })
      .then(res => res.json())
      .then(data => {
        console.log("Пост создан на сервере:", data);
        // можно заменить временный id на серверный, если нужно
      })
      .catch(error => console.error("Ошибка:", error))
      .finally(() => {
        navigate('/');
      });
  };

  return (
    <form className="form" onSubmit={submit}>
      <h1>Создать пост</h1>
      <input 
        placeholder="Напишите название поста" 
        value={title}
        onChange={e => setTitle(e.target.value)} 
        required
      />
      <textarea 
        placeholder="Напишите описание поста" 
        value={body}
        onChange={e => setBody(e.target.value)} 
        required
      />
      <div style={{marginTop: 12}}>
        <button className="btn primary" type="submit">Отправить</button>
      </div>
    </form>
  );
}
