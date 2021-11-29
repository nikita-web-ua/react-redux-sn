import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare, {ThunkAction} from 'redux-thunk'
import { reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
    profilePage :profileReducer,
    dialogsPage :dialogsReducer,
    sidebar :sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U: never

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(thunkMiddleWare)
));

export default store