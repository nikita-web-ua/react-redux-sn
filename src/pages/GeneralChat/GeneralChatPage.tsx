import {Button, Space, Input, Avatar, Divider, Row, Col} from "antd"
import {SendOutlined} from '@ant-design/icons';
import {useEffect, useState} from "react";

const {TextArea} = Input

const socket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

const GeneralChatPage: React.FC = () => {
    return (
        <Row justify={"center"} style={{ height: 'calc(100vh - 188px)', overflowY: 'auto'}}>
            <Col span={12}>
                <Chat />
            </Col>
        </Row>
    )
}

const Chat: React.FC = () => {
    return(
        <Space direction={'vertical'} style={{width:'100%'}}>
            <Messeges />
            <SendMessageForm />
        </Space>
    )
}

const Messeges: React.FC = () => {

   const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        socket.addEventListener('message', (e) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    } , [])

    return (
        <div style={{ height: 'calc(100vh - 250px)', overflowY: 'auto'}}>
            {messages.map((m, index) => <Message message={m} key={index}/>)}
        </div>
    )
}

const Message: React.FC<{message: ChatMessageType}> = ({message}) => {
    return (
        <div >
            <Space>
                <Avatar size={'large'} src={message.photo} />
                <b>{message.userName}</b>
            </Space>
            <div>
                <p>{message.message}</p>
            </div>
            <Divider/>
        </div>
    )
}

const SendMessageForm: React.FC = () => {

    const [textMessage, setTextMessage] = useState('')

    const sendMessage = () => {
        if(!textMessage){ return }

        socket.send(textMessage)
        setTextMessage('')
    }

    return (
        <Row justify={'space-between'}>
            <Col span={19}>
                <TextArea onChange={(e) => setTextMessage(e.currentTarget.value)} value={textMessage}/>
            </Col>
            <Col span={4}>
                <Button type={'primary'} onClick={sendMessage}>
                    <SendOutlined /> Send
                </Button>
            </Col>
        </Row>
    )
}

export default GeneralChatPage