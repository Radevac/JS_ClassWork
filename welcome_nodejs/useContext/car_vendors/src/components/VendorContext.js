import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCars } from '../services/api';

const VendorContext = createContext();

export const useVendorContext = () => useContext(VendorContext);

export const VendorProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCars = async () => {
            const data = await getCars();
            setCars(data);
            setLoading(false);
        };

        fetchCars();
    }, []);

    return (
        <VendorContext.Provider value={{ cars, loading }}>
            {children}
        </VendorContext.Provider>
    );
};
