import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {initialStateType} from "../../redux/dialogs-reducer";
import {Avatar, Col, List, Row} from "antd";
import {NavLink} from "react-router-dom";

type PropsType = {
    dialogsPage: initialStateType,
    sendMessage: (messageText: string) => void
}

const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(el => <Dialog name={el.name} id={el.id} img={el.img} key={el.id}/>)
    let messagesElements = state.messages.map(mas => <Message message={mas.message} key={mas.id}/>)


    let sendNewMessage = (formData: {newMessageText: string}) => {
        props.sendMessage(formData.newMessageText)
    }

    return (
        <div>
            <Row>
                <Col span={4}>
                    <List
                        itemLayout="horizontal"
                        dataSource={state.dialogs}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://joeschmoe.io/api/v1/${item.id}`} />}
                                    title={<NavLink to={"/dialogs/" + item.id}>{item.name}</NavLink>}
                                    // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </List.Item>
                        )}
                    />
                </Col>
                <Col span={20}>
                    <div className={s.messages}>
                        <div>{messagesElements}</div>
                        <div className={s.textInput}>
                            <SendMessageReduxForm onSubmit={sendNewMessage}/>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

let maxLength100 = maxLengthCreator(100)

type NewMessageFormValuesType = {
    newMessageText: string
}
type DialogsFormOwnPropsType = {}

const SendMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, DialogsFormOwnPropsType> & DialogsFormOwnPropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}  placeholder={"Write your message here... "}  name={'newMessageText'} validate={[required, maxLength100]}/>
            <button>Send</button>
        </form>
    )
}

let SendMessageReduxForm = reduxForm<NewMessageFormValuesType, DialogsFormOwnPropsType>({form: 'writeMessage'})(SendMessageForm)

export default Dialogs;

