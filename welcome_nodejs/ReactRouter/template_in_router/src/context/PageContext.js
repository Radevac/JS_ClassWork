import React, { createContext, useContext, useState } from 'react';

// Создаем контекст
const PageContext = createContext();

// Создаем провайдер для контекста
export const PageContextProvider = ({ children }) => {

    const [byContextPageName, setByContextPageName]
        = useState('Home by context');

    return (
        <PageContext.Provider
            value={{ byContextPageName, setByContextPageName }}>
            {children}
        </PageContext.Provider>
    );
};

// Создаем хук для удобного доступа к контексту
export const usePageContext = () => {
    return useContext(PageContext);
};
