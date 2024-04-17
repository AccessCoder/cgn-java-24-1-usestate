type LoginProps = {
    login: () => void
}
export default function Login(props:LoginProps){

    return(
        <button onClick={props.login}>Login</button>
    )
}