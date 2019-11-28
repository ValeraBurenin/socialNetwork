import React from "react";
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Профиль</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Сообщения</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/2" activeClassName={s.active}>Новости</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/3" activeClassName={s.active}>Музыка</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/4" activeClassName={s.active}>Настройки</NavLink>
            </div>
        </nav>
    );
}
