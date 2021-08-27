import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

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

let maxLength100 = maxLengthCreator(100)

const SendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} placeholder={"Write your message here... "}  name={'sendMessage'} validate={[required, maxLength100]}/>
            <button>Send</button>
        </form>
    )
}

let SendMessageReduxForm = reduxForm({
    form: 'writeMessage'
})(SendMessageForm)

export default Dialogs;

