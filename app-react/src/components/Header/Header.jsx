import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

let Header = () => {
    return <div className={s.Header}>
        <NavLink to={'api'} className={s.API}>About API</NavLink>
        <NavLink to={'app'} className={s.APP}>About APP</NavLink>
    </div>
}

export default Header