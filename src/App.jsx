import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreatePostPage } from './pages/CreatePostPage/CreatePostPage';
import { PostsPage } from './pages/PostsPage/PostsPage'


function App(){
    return(
      <BrowserRouter>
        <Routes>
          <Route index element={<CreatePostPage />}></Route>
          <Route path="/posts" element={<PostsPage />}></Route>
        </Routes>
      </BrowserRouter>
    )
}

export default App
