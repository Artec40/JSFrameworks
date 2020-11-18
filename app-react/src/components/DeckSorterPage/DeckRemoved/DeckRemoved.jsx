import React from 'react'
import FadeIn from 'react-fade-in'
import s from '../DeckSorterPage.module.css'

let DeckRemoved = () => {

    return <FadeIn className={s.DeckPage}>
        <div>
            DECK REMOVED!
        </div>
    </FadeIn>
}

export default DeckRemoved