import React from 'react'
import s from './DeckSorter.module.css'
import { NavLink } from 'react-router-dom'

let DeckSorter = ({
                      decks,
                      dataOnShuffleButtonClick,
                      setDataOnShuffleButtonClick,
                      shuffleDeck
                  }) => {

    let decksNameList = decks.map((d) => <option value={d}>{d}</option>)

    return <div className={s.DeckSorter}>
        <div className={s.Title}>
            <b>SHUFFLE DECK</b>
        </div>

        <div className={s.Selector}>
            deck name: <select defaultValue={dataOnShuffleButtonClick}
                               onChange={(e) => {
                                   setDataOnShuffleButtonClick(e.target.value)
                               }}>
            {decksNameList}
        </select>
        </div>

        <div>
            <NavLink to='/deck-shuffled'>
                <button onClick={()=>shuffleDeck(dataOnShuffleButtonClick)}>Shuffle</button>
            </NavLink>
        </div>
    </div>

}

export default DeckSorter