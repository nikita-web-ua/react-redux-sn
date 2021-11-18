const NEW_MESSAGE = 'SEND-MESSAGE';

type DialogType = {
    id: number,
    name: string,
    img: string | null
}

type MessagesType = {
    id: number,
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Nikita', img: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'},
        {id: 2, name: 'Chibis', img: 'https://xgh.dreaditkarein.pw/img/e69386580326bbf232c4223635ac3be0.png'},
        {id: 3, name: 'Solonin', img: 'https://xgh.dreaditkarein.pw/img/e69386580326bbf232c4223635ac3be0.png'},
        {id: 4, name: 'Chipinkos', img: 'https://xgh.dreaditkarein.pw/img/e69386580326bbf232c4223635ac3be0.png'},
        {id: 5, name: 'Zelemhan', img: 'https://xgh.dreaditkarein.pw/img/e69386580326bbf232c4223635ac3be0.png'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hello World!'},
        {id: 2, message: 'Gm Sir!'},
        {id: 1, message: 'How are you??!!'},
        {id: 2, message: 'Awesome!'},
        {id: 2, message: 'And You??!'},
    ] as Array<MessagesType>,
}

export type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 2, message: action.text}],
            }
        default:
            return state
    }
}

type sendMessageActionType = {
    type: typeof NEW_MESSAGE,
    text: string
}

export const sendMessage = (newMessage: string): sendMessageActionType => {
    return {
        type: NEW_MESSAGE,
        text: newMessage
    }
}

export default dialogsReducer;