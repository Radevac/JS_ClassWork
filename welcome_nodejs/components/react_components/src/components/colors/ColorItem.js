import MyLog from "../../helpers/MyLog";

export default (props) => {
    const delColor = () => {
        MyLog(props.color.id);
        props.delColor(props.color.id);
    };

    return (
        <li>
            <img
                src={`http://localhost:5227${props.color.url}`}
                alt={props.color.name}
                width='50px'
                height='50px'
            />
            {props.color.name} ({props.color.rgb})
            <span onClick={delColor} style={{cursor: 'pointer', color: 'red'}}> - Delete</span>
        </li>
    );
};
