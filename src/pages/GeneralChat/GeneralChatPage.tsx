import {Button, Space, Input, Avatar, Divider, Row, Col} from "antd"
import {SendOutlined} from '@ant-design/icons';
import React, {useEffect, useState} from "react";
import {compose} from "redux";
import {withAuthRedirect} from "../../components/hoc/withAuthRedirect";

const {TextArea} = Input

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

const GeneralChatPage: React.FC = () => {
    return (
        <Row justify={"center"} style={{overflowY: 'auto'}}>
            <Col span={12}>
                <Chat />
            </Col>
        </Row>
    )
}

const Chat: React.FC = () => {
    const [socket, setSocket] = useState<WebSocket | null>(null)

    useEffect(() =>  {
        let newSocket: WebSocket
        let reconnect = () => {
            console.log('SOCKET CLOSED')
            setTimeout(createWebSocket, 3000)
        }

        function createWebSocket() {

            newSocket?.removeEventListener('close', reconnect)
            newSocket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            newSocket.addEventListener('close', reconnect)
            setSocket(newSocket)
        }
        createWebSocket()

        return() => {
            newSocket.removeEventListener('close', reconnect)
            newSocket.close()
        }
    }, [])

    return(
        <Space direction={'vertical'} style={{width:'100%'}}>
            <Messeges socket={socket}/>
            <SendMessageForm socket={socket}/>
        </Space>
    )
}

const Messeges: React.FC<{ socket: WebSocket | null}> = ({socket}) => {
   const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        let messageHandler = (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        }
        socket?.addEventListener('message', messageHandler)

        return () => socket?.removeEventListener('message', messageHandler)

    } , [socket])

    return (
        <div style={{ height: 'calc(100vh - 250px)', overflowY: 'auto'}}>
            {messages.map((m, index) => <Message key={index} message={m} />)}
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

const SendMessageForm: React.FC<{socket: WebSocket | null}> = ({socket}) => {

    const [textMessage, setTextMessage] = useState('')
    const [socketReadyStatus, setSocketReadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect( () => {
        let openHandler = () => setSocketReadyStatus('ready')

        socket?.addEventListener('open', openHandler)

        return () => socket?.removeEventListener('open', openHandler)

    }, [socket])

    const sendMessage = () => {
        if(!textMessage){ return }

        socket?.send(textMessage)
        setTextMessage('')
    }

    return (
        <Row justify={'space-between'}>
            <Col span={19}>
                <TextArea onChange={(e) => setTextMessage(e.currentTarget.value)} value={textMessage}/>
            </Col>
            <Col span={4}>
                <Button disabled={ socket === null || socketReadyStatus !== 'ready'} type={'primary'} onClick={sendMessage}>
                    <SendOutlined /> Send
                </Button>
            </Col>
        </Row>
    )
}

export default compose<React.ComponentType>(withAuthRedirect)(GeneralChatPage)