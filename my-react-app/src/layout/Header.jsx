import {Link} from 'react-router-dom';
import "./Header.css";

export default function Header(){
    return (
        <header className='header'>
            <h2>Мой Блог</h2>
            <nav className='nav'>
                <Link to="/"> Главная </Link>
                <Link to="/"> Посты </Link>
                <Link to="#"> Контакты </Link>
                <Link to="/register"> Регистрация </Link>
                <Link to="/login"> Вход </Link>
                <Link to="/profile"> профиль </Link>
            </nav>
        </header>
    );
}
