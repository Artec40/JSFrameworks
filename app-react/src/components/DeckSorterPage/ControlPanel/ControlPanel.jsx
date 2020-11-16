import React from 'react'
import s from './ControlPanel.module.css'
import DeckGetter from './DeckGetter/DeckGetter'
import DeckCreater from './DeckCreater/DeckCreater'
import DeckSorter from './DeckSorter/DeckSorter'
import DeckRemover from './DeckRemover/DeckRemover'

let ControlPanel = ({
                        decks,
                        getCurrentDeck,
                        dataOnShowButtonClick,
                        setDataOnShowButtonClick,
                        deckNameOnCreateInput,
                        setDeckNameOnCreateInput,
                        dataOnCreateButtonClick,
                        setDataOnCreateButtonClick,
                        createDeck,
                        dataOnRemoveButtonClick,
                        setDataOnRemoveButtonClick,
                        removeDeck,
                        dataOnShuffleButtonClick,
                        setDataOnShuffleButtonClick,
                        shuffleDeck
                    }) => {
    return <div className={s.ControlPanel}>
        <DeckGetter decks={decks}
                    dataOnShowButtonClick={dataOnShowButtonClick}
                    setDataOnShowButtonClick={setDataOnShowButtonClick}/>
        <DeckCreater deckNameOnCreateInput={deckNameOnCreateInput}
                     setDeckNameOnCreateInput={setDeckNameOnCreateInput}
                     dataOnCreateButtonClick={dataOnCreateButtonClick}
                     setDataOnCreateButtonClick={setDataOnCreateButtonClick}
                     createDeck={createDeck}/>
        <DeckRemover decks={decks}
                     dataOnRemoveButtonClick={dataOnRemoveButtonClick}
                     setDataOnRemoveButtonClick={setDataOnRemoveButtonClick}
                     removeDeck={removeDeck}/>
        <DeckSorter decks={decks}
                    dataOnShuffleButtonClick={dataOnShuffleButtonClick}
                    setDataOnShuffleButtonClick={setDataOnShuffleButtonClick}
                    shuffleDeck={shuffleDeck}/>
    </div>
}

export default ControlPanel