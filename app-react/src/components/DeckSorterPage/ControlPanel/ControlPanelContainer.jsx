import React from 'react'
import ControlPanel from './ControlPanel'
import { connect } from 'react-redux'
import {
    getDecks,
    setDataOnShowButtonClick,
    setDataOnShuffleButtonClick,
    setDataOnRemoveButtonClick,
    setDataOnCreateButtonClick,
    setDeckNameOnCreateInput,
    createDeck,
    shuffleDeck,
    removeDeck
} from '../../../redux/decks-reducer'

class ControlPanelContainer extends React.Component {
    componentDidMount() {
        this.props.getDecks()
    }

    render() {
        return <div>
            <ControlPanel decks={this.props.decks}
                          dataOnShowButtonClick={this.props.dataOnShowButtonClick}
                          setDataOnShowButtonClick={this.props.setDataOnShowButtonClick}

                          deckNameOnCreateInput={this.props.deckNameOnCreateInput}
                          setDeckNameOnCreateInput={this.props.setDeckNameOnCreateInput}
                          dataOnCreateButtonClick={this.props.dataOnCreateButtonClick}
                          setDataOnCreateButtonClick={this.props.setDataOnCreateButtonClick}
                          createDeck={this.props.createDeck}

                          dataOnShuffleButtonClick={this.props.dataOnShuffleButtonClick}
                          setDataOnShuffleButtonClick={this.props.setDataOnShuffleButtonClick}
                          shuffleDeck={this.props.shuffleDeck}

                          dataOnRemoveButtonClick={this.props.dataOnRemoveButtonClick}
                          setDataOnRemoveButtonClick={this.props.setDataOnRemoveButtonClick}
                          removeDeck={this.props.removeDeck}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        decks: state.decks.decks,
        dataOnShowButtonClick: state.decks.currentDataOnButtonClick.showDeckName,
        dataOnShuffleButtonClick: state.decks.currentDataOnButtonClick.shuffleDeckName,
        dataOnRemoveButtonClick: state.decks.currentDataOnButtonClick.removeDeckName,
        deckNameOnCreateInput: state.decks.currentDataOnButtonClick.createDeck.deckName,
        dataOnCreateButtonClick: state.decks.currentDataOnButtonClick.createDeck.cardsInDeck
    }
}

export default connect(mapStateToProps,
    {
        getDecks,
        setDataOnShowButtonClick,
        setDataOnShuffleButtonClick,
        setDataOnRemoveButtonClick,
        setDataOnCreateButtonClick,
        setDeckNameOnCreateInput,
        createDeck,
        shuffleDeck,
        removeDeck
    })
(ControlPanelContainer)