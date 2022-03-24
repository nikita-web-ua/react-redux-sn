import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {useDispatch, useSelector} from 'react-redux'
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../common/FormsControls/FormsControls.module.css"
import style from "./Login.module.css"
import {AppStateType} from "../../redux/redux-store";
import {Button, Col, Row} from "antd";

type LoginFormOwnPropsType = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({
                                                                                                                        handleSubmit,
                                                                                                                        error,
                                                                                                                        captchaUrl
                                                                                                                    }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"E-mail"} name={"email"} component={Input} validate={[required]}/></div>
            <div>
                <Field type={"password"} placeholder={"Password"} name={"password"} component={Input}
                       validate={[required]}/></div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"} style={{width: '30px'}}/> remember me
            </div>
            {captchaUrl &&
            <div className={style.captcha}>
                <div>
                    <img src={captchaUrl}/>
                </div>
                <div>
                    <Field name={'captcha'} component={Input} validate={[required]}/>
                </div>
            </div>
            }
            {
                error && <div className={s.formSummaryError}> {error}</div>
            }
            <div>
                <Button type={"primary"} htmlType={'submit'}>Login</Button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({form: 'login'})(LoginForm)

type MapStatePropsType = {}

type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}

export const LoginPage: React.FC<MapStatePropsType> = (props) => {

    const dispatch = useDispatch()
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <Row justify={"center"} >
            <Col lg={6} md={9} sm={12}>
                <div className={style.loginBlock}>
                    <h1>Login</h1>
                    <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
                </div>
            </Col>
        </Row>
    )

}