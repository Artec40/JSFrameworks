import React from 'react'
import s from './DeckSorterPage.module.css'
import ControlPanel from './ControlPanel/ControlPanel'

let DeckSorterPage = () => {
    return <div className={s.DeckSorter}>
        <div className={s.Deck}>Deck</div>
        <ControlPanel/>
    </div>
}

export default DeckSorterPage