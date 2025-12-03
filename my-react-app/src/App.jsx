import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import Layout from './layout/Layout';
import PostsList from './pages/PostsList';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';

export const PostsContext = createContext();

export default function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    const postWithId = { ...newPost, id: Date.now() }; // Временный ID
    setPosts(prev => [postWithId, ...prev]);
  };

  const updatePost = (updatedPost) => {
    setPosts(prev => prev.map(post => post.id === updatedPost.id ? updatedPost : post));
  };

  const deletePost = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  return (
    <PostsContext.Provider value={{ posts, setPosts, addPost, updatePost, deletePost }}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PostsList />} />
            <Route path="post/:id" element={<PostDetail />} />
            <Route path="create" element={<CreatePost />} />
            <Route path="edit/:id" element={<EditPost />} />
          </Route>
        </Routes>
      </Router>
    </PostsContext.Provider>
  );
}
