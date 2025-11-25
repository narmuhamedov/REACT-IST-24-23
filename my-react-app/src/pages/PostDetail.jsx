import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./PostDetail.css";

export default function PostDetail(){
    const {id} = useParams();
    const [post, setPost] = useState(null);


useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data));
}, [id]);

if (!post) return <h2>Загрузка...</h2>;

return(
    <div>
        <h1 className='detail-title'>{post.title}</h1>
        <p className='detail-text'>{post.body}</p>
    </div>
);
}