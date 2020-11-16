import React from 'react'
import s from './DeckSorterPage.module.css'
import ControlPanelContainer from './ControlPanel/ControlPanelContainer'
import DeckContainer from './Deck/DeckContainer'
import { Route, Switch } from 'react-router-dom'
import DeckCreated from './DeckCreated/DeckCreated'
import DeckShuffled from './DeckShuffled/DeckShuffled'
import DeckRemoved from './DeckRemoved/DeckRemoved'
import EmptyDeck from './EmptyDeck/EmptyDeck'

let DeckSorterPage = () => {
    return <div className={s.DeckSorter}>
        <Switch>
            <Route path={'/deck/:deckName?'} render={() => <DeckContainer/>}/>
            <Route path={'/deck-created'} render={() => <DeckCreated/>}/>
            <Route path={'/deck-shuffled'} render={() => <DeckShuffled/>}/>
            <Route path={'/deck-removed'} render={() => <DeckRemoved/>}/>
            <Route path={'*'} render={() => <EmptyDeck/>}/>
        </Switch>
        <ControlPanelContainer/>
    </div>
}

export default DeckSorterPage