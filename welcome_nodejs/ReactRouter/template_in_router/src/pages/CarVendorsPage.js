import './../assets/css/cars.css'

import {usePageContext} from "../context/PageContext";
import {useCarsContext} from "../context/CarsContext";
import {Link} from "react-router-dom";

export default function CarVendorsPage () {

    const { setByContextPageName } = usePageContext();
    setByContextPageName('All cars vendor');

    const {carVendors, getDataFromServer} = useCarsContext();

    return(
        <section className='cars-section' >
            <div className="container px-4 px-lg-5">

                <h1>Cars Vendors</h1>

                <ul>
                {carVendors.map(car => (
                    <li key={car.slug}>
                        <Link to={`/cars/some-seo-text/${car.slug}`}>{car.name}</Link>
                    </li>
                ))}
                </ul>

                <button onClick={getDataFromServer}> Reload from DB </button>



            </div>
        </section>

    )
}