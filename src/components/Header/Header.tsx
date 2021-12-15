import {Link} from "react-router-dom"
import React from "react"
import {Button, Col, Layout, Row} from "antd"
import {useDispatch, useSelector} from "react-redux"
import {logout} from "../../redux/auth-reducer"
import {selectIsAuth, selectLogin} from "../../redux/auth-selectors"

const Header: React.FC = (props) => {

    const {Header} = Layout;
    const dispatch = useDispatch()

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectLogin)

    const logoutCallBack = () => {
        dispatch(logout())
    }

    return (
        <Header className="site-layout-background" style={{padding: 0}}>
            <header>
                <Row >
                    {isAuth
                        ? <Col push={20}><Button onClick={logoutCallBack}>Log out</Button></Col>
                        : <Col offset={20}><Button> <Link to={'/login'}>Login</Link> </Button></Col>}
                </Row>
            </header>
        </Header>
    );
}

export default Header;