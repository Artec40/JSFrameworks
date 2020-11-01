import React from 'react'
import Deck from './Deck'
import { connect } from 'react-redux'

class DeckContainer extends React.Component {
    render() {
        return <Deck cards={this.props.cards}/>
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.deck.decks[0].cards
    }
}
export default connect(mapStateToProps)(DeckContainer)