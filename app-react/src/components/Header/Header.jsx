import React from 'react'
import s from './Header.module.css'

let Header = ({ChangeInfoToApi, ChangeInfoToApp}) => {

    return <div className={s.Header}>
        <div className={s.API} onClick={ChangeInfoToApi}>About API</div>
        <div className={s.APP} onClick={ChangeInfoToApp}>About APP</div>
    </div>
}

export default Header