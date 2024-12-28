import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [pages, setPages] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const pagesData = await axios.get("https://content.vita325.com/wp-json/wp/v2/pages");
                const postsData = await axios.get("https://content.vita325.com/wp-json/wp/v2/posts");
                setPages(pagesData.data);
                setPosts(postsData.data);
            } catch (err) {
                setError("Не вдалося завантажити дані.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ pages, posts, loading, error }}>
            {children}
        </DataContext.Provider>
    );
};
