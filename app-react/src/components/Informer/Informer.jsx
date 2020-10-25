import React from 'react'
import s from './Informer.module.css'
import { Switch, Route } from 'react-router-dom'
import InfoAPI from './InfoAPI/InfoAPI'
import InfoAPP from './InfoAPP/InfoAPP'

let Informer = () => {
    return <div className={s.Informer}>
        <Switch>
            <Route path={'/api'} render={() => <InfoAPI/>}/>
            <Route path={'/app'} render={() => <InfoAPP/>}/>
            <Route path={'*'} render={() => <div>DECK SORTER</div>}/>
        </Switch>
    </div>
}

export default Informer