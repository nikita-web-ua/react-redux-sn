import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from 'react';
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((el) => {
        return <Dialog name={el.name} id={el.id} img={el.img}/>
    })
    let messagesElements = props.dialogsPage.messages.map(mas => <Message message={mas.message}/>)

    let sendMessage = (formData) => {
        props.sendMessage(formData.sendMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div className={s.textInput}>
                    <SendMessageReduxForm onSubmit={sendMessage} newMessageText={props.dialogsPage.newMessageText}/>
                </div>
            </div>

        </div>
    );
}

const SendMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} placeholder={"Write your message here... "}  name={'sendMessage'}/>
            <button>Send</button>
        </form>
    )
}

let SendMessageReduxForm = reduxForm({
    form: 'writeMessage'
})(SendMessage)

export default Dialogs;

