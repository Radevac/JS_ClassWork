import MyMenu from "./MyMenu";
import MyBreadcrumb from "./MyBreadcrumb";

export default function MyHeader(props) {
    return (<>
            <MyMenu byPropsPageName={props.byPropsPageName}/>
            <MyBreadcrumb byPropsPageName={props.byPropsPageName}/>
        </>)
}