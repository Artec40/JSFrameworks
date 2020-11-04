import React from 'react'
import s from './Deck.module.css'
import Card from './Card/Card'

let Deck = ({cards}) => {
    let deck = cards.map((c) => <Card url={c.url} className={s.Card}/>)

    return <div className={s.Deck}>
        {deck}
    </div>
}

export default Deck