import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import './PostsList.css';

export default function PostsList(){
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    return(
        <div>
            <h1>Посты</h1>
            {posts.map(post => (
                <div key={post.id} className="post">
                    <h3>{post.title}</h3>
                    <Link className="read-link" to={`/post/${post.id}`}>Читать далее</Link>
                </div>
            ))}
        </div>
    );

}