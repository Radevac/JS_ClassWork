import {Link} from "react-router-dom";
import {useState} from "react";

export default function CarsPage() {

    const [cars, setCars] = useState([
        {slug: 'bmw', name: 'BMW'},
        {slug: 'toyota', name: 'Toyota'},
        {slug: 'chevrolet', name: 'Chevrolet'},
    ]);

    // API --> GET /api/cars

    return (<>
        <h1> Cars Page </h1>
        <ul>
            {cars.map(car => (
                <li key={car.slug}>
                    <Link to={`/cars/some-seo-text/${car.slug}`}>{car.name}</Link>
                </li>
            ))}
        </ul>
    </>)
}

//
// <li><Link to='bmw'> BMW </Link></li>
// <li><Link to='toyota'> Toyota </Link></li>
// <li><Link to='chevrolet'> Chevrolet </Link></li>