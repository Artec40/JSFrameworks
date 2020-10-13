import React from 'react'
import './App.css'
import Header from './Header/Header'
import DeckSorterPage from './DeckSorterPage/DeckSorterPage'
import SortStarter from './SortStarter/SortStarter'
import Informer from './Informer/Informer'

function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Informer/>
            <SortStarter/>
            <DeckSorterPage/>
        </div>
    )
}

export default App
