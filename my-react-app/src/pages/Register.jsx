import { useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function Register(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();


    const handleRegister = (e) =>{
        e.preventDefault();
   

    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));

    navigate("/login");
 }

return (
    <form onSubmit={handleRegister}>
        <h1>Регистрация</h1>
        <input
        type="email"
        placeholder="Укажите EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />

        <input 
        type="password"
        placeholder="Придумайте пароль"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        required
        />

        <button>Регистрация</button>

    </form>
)


}