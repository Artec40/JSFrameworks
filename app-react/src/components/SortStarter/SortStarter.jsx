import React from 'react'
import s from './SortStarter.module.css'

let SortStarter = () => {

    return <div className={s.SortStarter}>
        <button onClick={() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            })
        }}>Sort the deck
        </button>
    </div>
}

export default SortStarter