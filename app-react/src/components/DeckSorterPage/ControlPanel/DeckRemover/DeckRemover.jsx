import React from 'react'
import s from './DeckRemover.module.css'
import { NavLink } from 'react-router-dom'

let DeckRemover = ({
                       decks,
                       dataOnRemoveButtonClick,
                       setDataOnRemoveButtonClick,
                       removeDeck
                   }) => {

    let decksNameList = decks.map((d) => <option value={d}>{d}</option>)

    return <div className={s.DeckRemover}>
        <div className={s.Title}>
            <b>REMOVE DECK</b>
        </div>

        <div className={s.Selector}>
            deck name: <select defaultValue={dataOnRemoveButtonClick}
                               onChange={(e) => {
                                   setDataOnRemoveButtonClick(e.target.value)
                               }}>
            {decksNameList}
        </select>
        </div>

        <div>
            <NavLink to={'/deck-removed'}>
                <button onClick={() => removeDeck(dataOnRemoveButtonClick)}>Remove</button>
            </NavLink>
        </div>
    </div>

}

export default DeckRemover