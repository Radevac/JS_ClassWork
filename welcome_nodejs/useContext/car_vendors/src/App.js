import React from 'react';
import { VendorProvider } from './components/VendorContext';
import CarList from './components/CarList';

const App = () => {
    return (
        <VendorProvider>
            <CarList />
        </VendorProvider>
    );
};

export default App;
