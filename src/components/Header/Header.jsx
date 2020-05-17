import React from "react";
import s from "./Header.module.css";
import {NavLink} from 'react-router-dom';


const Header = (props) => {
  return (
    <header className={s.header}>
        <img alt='imag' src="https://media-exp1.licdn.com/dms/image/C5612AQHwAP7r7d_edw/article-cover_image-shrink_600_2000/0?e=1594252800&v=beta&t=cr-ncM4W2JY2NhrP8-UYvlwbg2f-s_soOh7FZvb7V8Q" />
        <div className={s.loginBlock}>
            {props.isAuth
                ? props.login
                : <NavLink to={`/login`}>Login</NavLink>}

        </div>
    </header>

  );
};

export default Header;
