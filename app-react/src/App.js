import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import DeckSorterPage from './components/DeckSorterPage/DeckSorterPage'
import SortStarter from './components/SortStarter/SortStarter'
import Informer from './components/Informer/Informer'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/redux-store'

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
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
}
export default MyApp
