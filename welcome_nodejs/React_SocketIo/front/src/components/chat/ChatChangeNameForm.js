import socket from "./MySocketIo";

export default function ChatChangeNameForm () {

    const doEmitChangeName = (ev) => {
        ev.preventDefault()

        const nameUser = ev.target.name.value
        console.log(nameUser)

        socket.emit('new_name_user', nameUser)
        ev.target.name.value = ''

    }

    return(
        <>
            <form onSubmit={doEmitChangeName}>
                <input type="text" name="name" />
                <input type="submit" value="ChangeName"/>
            </form>
        </>
    )

}