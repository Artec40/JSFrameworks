import React from 'react'
import s from './Header.module.css'

let Header = () => {
    return <div className={s.Header}>
        <div className={s.API}>About API</div>
        <div className={s.APP}>About APP</div>
    </div>
}

export default Header