import './App.css'
import {useState} from "react";
import Login from "./Login.tsx";
import Logout from "./Logout.tsx";


function App() {

    const [count, setCount] = useState<number>(0)

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    function mineCoin(){
        setCount(count+1)
        console.log(count)
    }

    function handleLogin(){
        setIsLoggedIn(true)
    }

    function handleLogout(){
        setIsLoggedIn(false)
    }
  return (
    <>
        <h1>CogeCoin</h1>
        <Login login={handleLogin}/>
        <Logout logout={handleLogout}/>

        {isLoggedIn ?
            <>
                <h2>{count}</h2>
                <button onClick={mineCoin}>Mine Coin</button>
            </>
            : <h2>Please login!</h2>}

        {isLoggedIn && <>
            <h2>{count}</h2>
            <button onClick={mineCoin}>Mine Coin</button>
        </>}
    </>
  )
}

export default App
