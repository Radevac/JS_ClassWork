import {usePageContext} from "../context/PageContext";

export default function Error404Page (props) {

    props.setByPropsPageName (' 404 ')

    const { setByContextPageName } = usePageContext();
    setByContextPageName('Error by Context from Component');

    return(
        <>
            <h1> Error 404 </h1>
        </>
    )
}