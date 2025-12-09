import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();

        const savedUser = JSON.parse(localStorage.getItem('user'))

        if (savedUser && savedUser.email === email && savedUser.password === password){
            localStorage.setItem("isAuth", 'true');
            navigate("/profile");
        }else{
            alert('Неверный логин или пароль!')
        }
    };


    return (
    <form onSubmit={handleLogin}>
        <h1>Авторизация</h1>
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

        <button>Войти</button>
    </form>
)




}