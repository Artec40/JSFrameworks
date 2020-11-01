import React from 'react'
import s from './DeckSorterPage.module.css'
import ControlPanel from './ControlPanel/ControlPanel'
import DeckContainer from './Deck/DeckContainer'

let DeckSorterPage = () => {
    return <div className={s.DeckSorter}>
        <DeckContainer/>
        <ControlPanel/>
    </div>
}

export default DeckSorterPage