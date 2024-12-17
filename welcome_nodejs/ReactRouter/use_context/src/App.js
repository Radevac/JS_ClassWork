import './App.css';
import MyLayout from "./layout/MyLayout";

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainMenuContextProvider} from "./components/menu/MainMenuContext";
import MyPage from "./components/pages/MyPage";
import BlogList from "./components/blog/BlogList";
import BlogItem from "./components/blog/BlogItem";
import {BlogContextProvider} from "./components/blog/BlogContext";

function App() {
  return (
      <BrowserRouter><MainMenuContextProvider><BlogContextProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<MyLayout />} >
                <Route path=":page_slug" element={<MyPage />} />
                <Route path="posts" element={<BlogList />}/>
                <Route path="posts/:post_slug" element={<BlogItem />}/>
            </Route>

          </Routes>
        </div>
        <ToastContainer/>
      </BlogContextProvider>
      </MainMenuContextProvider></BrowserRouter>
  );
}

export default App;
