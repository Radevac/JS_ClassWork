import React, { createContext, useContext, useState } from 'react';

// Создаем контекст
const PageContext = createContext();

// Создаем провайдер для контекста
export const CarsContextProvider = ({ children }) => {

    const [carModels, setCarModels] = useState([
        {vendor: 'bmw', name: 'X3'},
        {vendor: 'bmw', name: 'X5'},
        {vendor: 'toyota', name: 'Rav4'},
        {vendor: 'toyota', name: 'Yaris'},
        {vendor: 'chevrolet', name: 'Aveo'},
        {vendor: 'chevrolet', name: 'Spark'},
    ])

    const [carVendors, setCarVendors] = useState(
        [
            {slug: 'bmw', name: 'BMW'},
            {slug: 'toyota', name: 'Toyota'},
            {slug: 'chevrolet', name: 'Chevrolet'},
        ]
    )

    const getDataFromServer = (ev) => {
        ev.preventDefault()
        console.log ('FETCH => get /api/cars')
    }


    return (
        <PageContext.Provider
            value={{carModels, carVendors, getDataFromServer }}>
            {children}
        </PageContext.Provider>
    );
};

// Создаем хук для удобного доступа к контексту
export const useCarsContext = () => {
    return useContext(PageContext);
};
