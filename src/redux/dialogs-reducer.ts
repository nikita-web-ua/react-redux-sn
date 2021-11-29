import {DialogType, MessagesType} from "../types/types";
import {InferActionsTypes} from "./redux-store";

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
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'dialogs/SEND-MESSAGE':
            return {
                ...state,
                messages: [...state.messages, {id: 2, message: action.text}],
                newMessageText: ""
            }
        default:
            return state
    }
}

export const actions = {
    sendMessage: (newMessage: string) => ({type: 'dialogs/SEND-MESSAGE', text: newMessage} as const)
}

export default dialogsReducer
export type initialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
