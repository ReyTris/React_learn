import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'


const DialogItem = (props) => {

    let path = "/dialogs/"+ props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}


const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Valera'},
    ]

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Fuck'},
        {id: 4, message: 'Fuck'},
        {id: 5, message: 'Fuck'},
    ]

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                </div>
                <div className={s.messages}>
                    <Message message={messageData[0].message}/>
                    <Message message={messageData[1].message}/>
                </div>

            </div>
        </div>
    )
}

export default Dialogs