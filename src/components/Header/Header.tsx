import {Link} from "react-router-dom"
import React from "react"
import {Button, Layout} from "antd"
import {useDispatch, useSelector} from "react-redux"
import {logout} from "../../redux/auth-reducer"
import {selectIsAuth, selectLogin} from "../../redux/auth-selectors"
import {LogoutOutlined, LoginOutlined} from '@ant-design/icons'

const Header: React.FC = (props) => {

    const {Header} = Layout;
    const dispatch = useDispatch()

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectLogin)

    const logoutCallBack = () => {
        debugger
        dispatch(logout())
    }

    return (
        <Header className="site-layout-background" style={{padding: '0 15% 0 0', display: 'flex', justifyContent: 'flex-end'}}>
            <header style={{display: 'inline-block'}}>
                    {isAuth
                        ? <Button type="primary" onClick={logoutCallBack}>Log out <LogoutOutlined /></Button>
                        : <Button> <Link to={'/login'}>Login <LoginOutlined /></Link> </Button>}
            </header>
        </Header>
    );
}

export default Header;