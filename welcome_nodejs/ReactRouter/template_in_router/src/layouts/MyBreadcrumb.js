import './../assets/css/breadcrumb.css'
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {usePageContext} from "../context/PageContext";

export default function MyBreadcrumb(props) {

    const location = useLocation();
    const [byLocationsPageName, setByLocationsPageName] = useState('Home');
    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setByLocationsPageName('Home');
                break;
            case '/about':
                setByLocationsPageName('About');
                break;
            case '/projects':
                setByLocationsPageName('Projects');
                break;
            case '/contact':
                setByLocationsPageName('Contact');
                break;
            default:
                setByLocationsPageName('Error 404');
        }

    }, [location]);


    const { byContextPageName } = usePageContext();





    return (<div className="container px-4 px-lg-5">
            <nav aria-label="breadcrumb" id="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/"><i className="fa-solid fa-house"></i></Link></li>
                    <li className="breadcrumb-item active" aria-current="page">By Location: {byLocationsPageName}</li>
                    <li className="breadcrumb-item active" aria-current="page">By Props: {props.byPropsPageName}</li>
                    <li className="breadcrumb-item active" aria-current="page">By Context: {byContextPageName}</li>
                </ol>
            </nav>
        </div>)
}