import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const PagesList = () => {
    const { pages, loading, error } = useContext(DataContext);

    if (loading) return <p>Завантаження...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Сторінки</h2>
            <ul>
                {pages.map((page) => (
                    <li key={page.id}>
                        <h3>{page.title.rendered}</h3>
                        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default PagesList;
