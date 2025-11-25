import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import PostsList from './pages/PostsList';
import PostDetail from './pages/PostDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsList />} />
          <Route path="post/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}