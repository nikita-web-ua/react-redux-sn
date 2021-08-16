import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" />

            <div className={s.loginBlock}>
                { props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;