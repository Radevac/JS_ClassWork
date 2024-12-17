import {useParams} from "react-router-dom";

export default function CarModelPage () {

    const { seo_text, car_slug } = useParams();

    // API --> GET /api/cars/{id} --- {slug}

    return(<>
        <h1> Cars Page : {car_slug} </h1>

    </>)
}