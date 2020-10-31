import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import DeckSorterPage from './components/DeckSorterPage/DeckSorterPage'
import SortStarter from './components/SortStarter/SortStarter'
import Informer from './components/Informer/Informer'
import { BrowserRouter } from 'react-router-dom'

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

const MyApp = () => {
    return <BrowserRouter>
        <App/>
    </BrowserRouter>
}
export default MyApp
