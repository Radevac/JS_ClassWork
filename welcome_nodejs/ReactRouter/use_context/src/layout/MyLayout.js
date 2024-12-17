import MyMenu from "./MyMenu";
import {Outlet} from "react-router-dom";

export default function MyLayout() {
    return(
        <>
        <MyMenu/>
        <Outlet />
        </>
    )
}