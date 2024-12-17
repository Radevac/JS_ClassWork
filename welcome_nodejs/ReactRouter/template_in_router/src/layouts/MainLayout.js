import MyHeader from "./MyHeader";
import MyContact from "./MyContact";
import MyFooter from "./MyFooter";
import {Outlet} from "react-router-dom";

export default function MainLayout (props) {
    return(
        <>
            <MyHeader byPropsPageName={props.byPropsPageName} />

            <Outlet />

            <MyContact />
            <MyFooter />
        </>
    )
}