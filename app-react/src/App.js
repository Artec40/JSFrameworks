import React from 'react'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import DeckSorterPage from './components/DeckSorterPage/DeckSorterPage'
import SortStarter from './components/SortStarter/SortStarter'
import InformerContainer from './components/Informer/InformerContainer'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/redux-store'

function App() {
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <InformerContainer/>
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
