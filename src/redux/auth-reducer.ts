import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../api/api";
import {stopSubmit} from "redux-form";
import {authAPI} from "../api/authAPI";
import {securityAPI} from "../api/securityAPI";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

const authReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
        case 'auth/SET_NEW_CAPTCHA_URL':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'auth/SET_USER_DATA', payload: {userId, email, login, isAuth}
    } as const),
    setNewCaptchaUrl: (captchaUrl: string) => ({type: 'auth/SET_NEW_CAPTCHA_URL', payload: {captchaUrl}} as const),

}

export const authMe = (): ThunkType => async (dispatch) => {
    let meData = await authAPI.authMe()

    if (meData.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = meData.data
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(authMe())
    } else {
        if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }

        let message = data.messages.length > 0 ? data.messages[0] : "Some error appeared"
        dispatch(stopSubmit("login", {_error: message}))
    }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch: any) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.setNewCaptchaUrl(captchaUrl))

}

export const logout = (): ThunkType => async (dispatch: any) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
};

export default authReducer

export type initialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>








