import React from 'react'
import s from './DeckGetter.module.css'

let DeckGetter = () => {
    return <div className={s.DeckGetter}>
        <div className={s.Title}>
            <b>GET DECK</b>
        </div>

        <div className={s.Selector}>
            deck name: <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        </div>

        <div>
            <button>Show</button>
        </div>
    </div>

}

export default DeckGetter