import React from 'react'
import s from '../Informer.module.css'

let InfoAPP = () => {
    return <div>
        <div>APP</div>
        <div className={s.APPtext}>spa app developed on javascript
            <ul>libraries:
                <li>react - work with DOM</li>
                <li>redux - business layer</li>
                <li>react-redux - work with state</li>
                <li>react-router-dom - work with routing</li>
                <li>thunk - work with api requests</li>
            </ul>
        </div>
    </div>
}

export default InfoAPP