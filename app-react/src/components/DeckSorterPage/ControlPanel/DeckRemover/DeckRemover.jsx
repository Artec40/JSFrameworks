import React from 'react'
import s from './DeckRemover.module.css'

let DeckRemover = () => {
    return <div className={s.DeckRemover}>
        <div className={s.Title}>
            <b>REMOVE DECK</b>
        </div>

        <div className={s.Selector}>
            deck name: <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        </div>

        <div>
            <button>Remove</button>
        </div>
    </div>

}

export default DeckRemover