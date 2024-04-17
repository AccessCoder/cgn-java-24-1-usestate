type LogoutProps = {
    logout: () => void
}
export default function Logout(props:LogoutProps){

    return(
        <button onClick={props.logout}>Logout</button>
    )
}