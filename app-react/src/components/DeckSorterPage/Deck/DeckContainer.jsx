import React from 'react'
import Deck from './Deck'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCurrentDeck } from '../../../redux/decks-reducer'
import { compose } from 'redux'
import EmptyDeck from '../EmptyDeck/EmptyDeck'

class DeckContainer extends React.Component {

    refreshCurrentDeck() {
        let deckName = this.props.match.params.deckName
        this.props.getCurrentDeck(deckName)
    }

    componentDidMount() {
        this.refreshCurrentDeck()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.deckName !== prevProps.match.params.deckName) {
            this.refreshCurrentDeck()
        }
    }


    render() {
        if (this.props.deck.length === 0)
            return <EmptyDeck/>
        else
            return <Deck cards={this.props.deck.cards}/>
    }
}

const mapStateToProps = (state) => {
    return {
        deck: state.decks.currentDeck
    }
}
export default compose(connect(mapStateToProps, {getCurrentDeck}),
    withRouter)
(DeckContainer)