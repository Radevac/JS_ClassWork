import React from 'react';

const CarItem = ({ car }) => {
    return (
        <div>
            <h2>{car.name}</h2>
            <p>Vendor: {car.vendor}</p>
            <p>Price: {car.price}</p>
        </div>
    );
};

export default CarItem;
