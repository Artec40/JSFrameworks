import React from 'react'
import s from './DeckGetter.module.css'
import { NavLink } from 'react-router-dom'

let DeckGetter = ({decks, dataOnShowButtonClick, setDataOnShowButtonClick}) => {

    let decksNameList = decks.map((d) => <option value={d}>{d}</option>)
    return <div className={s.DeckGetter}>
        <div className={s.Title}>
            <b>GET DECK</b>
        </div>
        <div className={s.Selector}>
            deck name: <select defaultValue={dataOnShowButtonClick}
                               onChange={(e) => {
                                   setDataOnShowButtonClick(e.target.value)
                               }}>
            {decksNameList}
        </select>
        </div>

        <div>
            {
                dataOnShowButtonClick
                    ? <NavLink to={'/deck/' + dataOnShowButtonClick}>
                        <button>Show</button>
                    </NavLink>
                    : <NavLink to={'/deck/' + decks[0]}>
                        <button>Show</button>
                    </NavLink>
            }
        </div>
    </div>

}

export default DeckGetter