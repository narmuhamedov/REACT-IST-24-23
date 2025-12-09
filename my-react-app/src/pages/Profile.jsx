import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Profile(){
    const navigate = useNavigate()


    useEffect(()=>{
        const isAuth = localStorage.getItem("isAuth");
        if (!isAuth){
            navigate('/login')
        }
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem('isAuth');
        navigate('/login')
    }

    return (
        <div>
            <h1>Мой профиль</h1>
            <button onClick={logout}>Выйти из аккаунта</button>
        </div>
    )



}