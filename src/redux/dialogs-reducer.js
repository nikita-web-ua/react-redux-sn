const NEW_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Nikita',
            img: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
        },
        {id: 2, name: 'Chibis', img: 'https://xgh.dreaditkarein.pw/img/e69386580326bbf232c4223635ac3be0.png'},
        {id: 3, name: 'Solonin', img: 'https://xgh.dreaditkarein.pw/img/e69386580326bbf232c4223635ac3be0.png'},
        {
            id: 4,
            name: 'Chipinkos',
            img: 'https://xgh.dreaditkarein.pw/img/e69386580326bbf232c4223635ac3be0.png'
        },
        {id: 5, name: 'Zelemhan', img: 'https://xgh.dreaditkarein.pw/img/e69386580326bbf232c4223635ac3be0.png'},

    ],
    messages: [
        {id: 1, message: 'Hello World!'},
        {id: 2, message: 'Gm Sir!'},
        {id: 1, message: 'How are you??!!'},
        {id: 2, message: 'Awesome!'},
        {id: 2, message: 'And You??!'},
    ],
    newMessageText: "",
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            }
        case NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 2, message: state.newMessageText}],
                newMessageText: ''
            }
        default:
            return state
    }
}

export const sendMessage = () => {
    return {
        type: NEW_MESSAGE,
    }
}

export const updateNewMessageText = (newMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: newMessage
    }
}

export default dialogsReducer;