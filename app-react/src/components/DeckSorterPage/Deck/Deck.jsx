import React from 'react'
import s from './Deck.module.css'
import Card from './Card/Card'

let Deck = ({cards}) => {
    let deck = cards.map((c) => <Card className={s.Card} url={c.cardUrl}/>)

    return <div className={s.Deck}>
        {deck}
    </div>
}

export default Deck