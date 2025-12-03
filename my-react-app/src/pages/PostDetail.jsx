import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { PostsContext } from '../App';
import "./PostDetail.css";

export default function PostDetail() {
  const { id } = useParams();
  const { posts } = useContext(PostsContext);

  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div>
        <h2>Пост не найден</h2>
        <p>Возможно, он был удален или еще не загружен</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className='detail-title'>{post.title}</h1>
      <p className='detail-text'>{post.body}</p>
    </div>
  );
}
