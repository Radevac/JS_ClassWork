import React, {createContext, useContext, useEffect, useState} from 'react';

const PageContext = createContext();

export const BlogContextProvider =  ({ children }) => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        fetch('https://content.vita325.com/wp-json/wp/v2/posts')
            .then(res=> res.json())
            .then(posts=> {
                setPosts(posts)
                console.log(posts)
            })
    }

    useEffect(() => {
        getPosts()
    }, []);

    const getPostBySlug = (post_slug) => {
        return posts.find(p=> p.slug === post_slug)
    }

    return (
        <PageContext.Provider
            value={{posts, getPostBySlug }}>
            {children}
        </PageContext.Provider>
    );

}

export const useBlogContext = () => {
    return useContext(PageContext);
};
