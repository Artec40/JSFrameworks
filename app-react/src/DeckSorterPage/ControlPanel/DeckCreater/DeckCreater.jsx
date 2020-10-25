import React from 'react'
import s from './DeckCreater.module.css'

let DeckCreater = () => {
    return <div className={s.DeckCreater}>
        <div className={s.Title}>
            <b>CREATE DECK</b>
        </div>

        <div className={s.Selector}>
            deck name: <input type={'text'}/>
            cards in deck: <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        </div>

        <div>
            <button>Create</button>
        </div>
    </div>

}

export default DeckCreater