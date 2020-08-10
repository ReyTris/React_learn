import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'



const Message = (props) => {

    let newMessage = React.createRef()

    let addMessage = () => {
        let text = newMessage.current.value 
        alert(text)
    }

    return (
        <div>
            <div className={s.message}>{props.message}</div>
            <textarea ref={newMessage}></textarea>
            <button onClick={addMessage}>add message</button>
        </div>
    )
}



export default Message