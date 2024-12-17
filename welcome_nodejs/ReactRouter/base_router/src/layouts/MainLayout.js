import {Link, Outlet} from "react-router-dom";
import MyLink from "../components/MyLink";

export default function MainLayout () {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/about"> About </Link></li>
                    <li><Link to="/cars"> Cars </Link></li>
                    <li><Link to="/contacts"> Contacts </Link></li>
                </ul>
            </nav>

            <hr/>

            <Outlet />
        </>
    )
}