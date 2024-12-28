import React from 'react';
import { PagesProvider } from './context/PagesContext';
import { PostsProvider } from './context/PostsContext';
import Pages from './components/Pages';
import Posts from './components/Posts';

function App() {
    return (
        <div>
            <h1>Welcome to useContext_vita325</h1>
            <PagesProvider>
                <Pages />
            </PagesProvider>
            <PostsProvider>
                <Posts />
            </PostsProvider>
        </div>
    );
}

export default App;
