import React, {createContext, useContext, useEffect, useState} from 'react';

const PageContext = createContext();



export const MainMenuContextProvider = ({ children }) => {

    const [pages, setPages] = useState([]);

    const getPageBySlug = (page_slug) => {
        return pages.find(p=> p.slug === page_slug)
    }

    const getPages = () => {
        fetch('https://content.vita325.com/wp-json/wp/v2/pages')
            .then(res=> res.json())
            .then(pages=> {
                setPages(pages)
                console.log(pages)
            })
    }

    useEffect(() => {
        getPages()
    }, []);


    return (
        <PageContext.Provider
            value={{pages, getPageBySlug }}>
            {children}
        </PageContext.Provider>
    );
}


export const useMainMenuContext = () => {
    return useContext(PageContext);
};
