import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from 'react';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((el) => {
        return <Dialog name={el.name} id={el.id} img={el.img}/>
    })
    let messagesElements = props.dialogsPage.messages.map(mas => <Message message={mas.message}/>)

    let sendMessage = () => {
        props.sendMessage()
    }

    let updateNewMessageText = (e) => {
      props.updateNewMessageText(e.target.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div className={s.textInput}>
                    <textarea onChange={updateNewMessageText} value={props.dialogsPage.newMessageText}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;