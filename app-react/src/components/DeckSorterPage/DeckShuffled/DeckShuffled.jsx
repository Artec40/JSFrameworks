import React from 'react'
import FadeIn from 'react-fade-in'
import s from '../DeckSorterPage.module.css'

let DeckShuffled = () => {

    return <FadeIn className={s.DeckPage}>
        <div>
            DECK SHUFFLED!
        </div>
    </FadeIn>
}

export default DeckShuffled