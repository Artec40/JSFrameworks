import React from 'react'
import s from './Card.module.css'

let Card = ({url}) => {

    return <div style={{background: 'url(' + url + ') center/cover no-repeat'}}
                className={s.Card}>

    </div>
}

export default Card