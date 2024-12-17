export default function  MyLink (props) {

    const onClick = (ev) => {
        ev.preventDefault()
        console.log('Click')
        return false
    }

    return (
        <a href={props.to} onClick={onClick}>
            {props.children}
        </a>
    )
}