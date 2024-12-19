import React from 'react';
import CarItem from './CarItem';
import { useVendorContext } from './VendorContext';

const CarList = () => {
    const { cars, loading } = useVendorContext();

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Car Vendors</h1>
            <div>
                {cars.map(car => (
                    <CarItem key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
};

export default CarList;
