import React from 'react'
import s from './DeckSorter.module.css'

let DeckSorter = () => {
    return <div className={s.DeckSorter}>
        <div className={s.Title}>
            <b>SHUFFLE DECK</b>
        </div>

        <div className={s.Selector}>
            deck name: <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        </div>

        <div>
            <button>Shuffle</button>
        </div>
    </div>

}

export default DeckSorter