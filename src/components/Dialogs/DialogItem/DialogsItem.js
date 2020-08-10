import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'


const DialogItem = (props) => {

    let path = "/dialogs/"+ props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src="https://vignette.wikia.nocookie.net/avatar/images/9/95/2%D1%8506_%D0%A2%D0%BE%D1%84.jpg/revision/latest?cb=20110327131628&path-prefix=ru"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem