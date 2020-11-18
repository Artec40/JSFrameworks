import React from 'react'
import s from './DeckCreater.module.css'
import { NavLink } from 'react-router-dom'

let DeckCreater = ({
                       deckNameOnCreateInput,
                       setDeckNameOnCreateInput,
                       dataOnCreateButtonClick,
                       setDataOnCreateButtonClick,
                       createDeck
                   }) => {
    return <div className={s.DeckCreater}>
        <div className={s.Title}>
            <b>CREATE DECK</b>
        </div>

        <div className={s.Selector}>
            deck name: <input onChange={(e) => setDeckNameOnCreateInput(e.target.value)}
                              value={deckNameOnCreateInput}
                              type={'text'}/>
            cards in deck: <select onChange={(e) => {
            setDataOnCreateButtonClick(e.target.value)
        }}>
            <option value={24}>24</option>
            <option value={32}>32</option>
            <option value={36}>36</option>
            <option value={52}>52</option>
        </select>
        </div>

        <div>
            <NavLink to='/deck-created'>
                {
                    dataOnCreateButtonClick
                        ? <button
                            onClick={() => createDeck(deckNameOnCreateInput, dataOnCreateButtonClick)}>Create</button>
                        : <button
                            onClick={() => createDeck(deckNameOnCreateInput, 24)}>Create</button>
                }

            </NavLink>
        </div>
    </div>

}

export default DeckCreater