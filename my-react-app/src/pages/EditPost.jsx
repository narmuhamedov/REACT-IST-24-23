import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostsContext } from '../App';


export default function EditPost() {
  const { id } = useParams();
  const [post, setPost] = useState({ title: '', body: '' });
  const navigate = useNavigate();
  const { updatePost, posts } = useContext(PostsContext);

  useEffect(() => {
    const localPost = posts.find(p => p.id === Number(id));
    if (localPost) {
      setPost(localPost);
    } else {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(() => {});
    }
  }, [id, posts]);

  const handleUpdate = (e) => {
    e.preventDefault();
    updatePost({ ...post, id: Number(id) }); // оптимистично
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => {
        console.log("Пост обновлен на сервере:", data);
      })
      .catch(error => console.error("Ошибка:", error))
      .finally(() => {
        navigate('/');
      });
  };

  return (
    <form className="form" onSubmit={handleUpdate}>
      <h1>Изменить данные</h1>
      <input 
        value={post.title} 
        onChange={e => setPost({ ...post, title: e.target.value })} 
        required
      />
      <textarea 
        value={post.body} 
        onChange={e => setPost({ ...post, body: e.target.value })} 
        required
      />
      <div style={{marginTop:12}}>
        <button className="btn primary" type="submit">Обновить</button>
      </div>
    </form>
  );
}
