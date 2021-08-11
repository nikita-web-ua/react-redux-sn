import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello World!", likesCounter: 321},
                {id: 2, message: "0101101110", likesCounter: 18},
            ],
            newPostText: "",
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {  // {type: 'ADD-POST', ...}

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }

}


export default store;
window.store = store


