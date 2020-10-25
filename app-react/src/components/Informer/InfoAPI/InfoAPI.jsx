import React from 'react'
import s from '../Informer.module.css'

let InfoAPI = () => {
    return <div>
        <div>API</div>
        <div className={s.APItext}>api developed on .net c#
            <ul>requests:
                <li>get - api/values (получить список названий колод)</li>
                <li>get - api/values/getdeck (получить колоду по имени)</li>
                <li>post - api/values (создать именованную колоду карт)</li>
                <li>put - api/values/filldeckname (перетасовать колоду по имени)</li>
                <li>delete - api/values/deletedeckname (удалить колоду карт по имени)</li>
            </ul>
        </div>
    </div>
}

export default InfoAPI