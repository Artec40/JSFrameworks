import React from 'react'
import FadeIn from 'react-fade-in';
import s from './Deck.module.css'
import Card from './Card/Card'

let Deck = ({cards}) => {
    let deck = cards.map((c) => <FadeIn><Card className={s.Card} url={c.cardUrl}/></FadeIn>)

    return <div className={s.Deck}>
        {deck}
    </div>
}

export default Deck