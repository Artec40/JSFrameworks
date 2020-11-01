import React from 'react'
import s from './Card.module.css'

let Card = ({url}) => {
    return <div style={{background: 'url('+url+')'+'no-repeat', backgroundSize: 'cover'}}
                className={s.Card}>

    </div>
}

export default Card