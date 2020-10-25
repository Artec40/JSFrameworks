import React from 'react'
import s from './ControlPanel.module.css'
import DeckGetter from './DeckGetter/DeckGetter'
import DeckCreater from './DeckCreater/DeckCreater'
import DeckSorter from './DeckSorter/DeckSorter'
import DeckRemover from './DeckRemover/DeckRemover'

let ControlPanel = () => {
    return <div className={s.ControlPanel}>
        <DeckGetter/>
        <DeckCreater/>
        <DeckRemover/>
        <DeckSorter/>
    </div>
}

export default ControlPanel