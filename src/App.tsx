import styles from './app.module.css'
import 'antd/dist/antd.css'
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom"
import Settings from "./components/Settings/Settings"
import Music from "./components/Music/Music"
import News from "./components/News/News"
import {UsersPage} from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import {LoginPage} from "./components/Login/LoginPage"
import React, {Component, Suspense} from "react"
import {connect, Provider} from "react-redux"
import {initializeApp} from "./redux/app-reducer"
import Preloader from "./components/common/Preloader/Preloader"
import store, {AppStateType} from "./redux/redux-store"
import {Layout, Menu, Image, Row, Col} from 'antd';
import {
    SettingOutlined,
    FireOutlined,
    SoundOutlined,
    CommentOutlined,
    MessageOutlined,
    VideoCameraOutlined,
    UserOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import Header from "./components/Header/Header";

const {Content, Footer, Sider } = Layout;

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const GeneralChatPage = React.lazy(() => import("./pages/GeneralChat/GeneralChatPage"))

type MapStateTpPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    initializeApp: () => void
}

class App extends Component<MapStateTpPropsType & MapDispatchToPropsType> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        console.error('Some error occured! (Check console for more details)')
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount(){
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <Layout>
                <Layout className="site-layout" >
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={broken => {
                            console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                    >
                        <div style={{marginLeft:20, marginTop:7, marginBottom: 0}}>
                            <Row justify={'start'}>
                                <Col >
                                    <Image
                                        preview={false}
                                        height={50}
                                        src={'https://miro.medium.com/max/800/1*VeM-5lsAtrrJ4jXH96h5kg.png'}
                                    />
                                </Col>
                            </Row>
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                <Link to='/profile'>My Profile</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<MessageOutlined/>}>
                                <Link to='/dialogs' >Messages</Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<TeamOutlined />}>
                                <Link to='/users' >Users</Link>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<CommentOutlined />}>
                                <Link to='/generalChatPage' >General Chat</Link>
                            </Menu.Item>
                            <Menu.Item key="5" icon={<FireOutlined />}>
                                <Link to='/news' >News</Link>
                            </Menu.Item>
                            <Menu.Item key="6" icon={<SoundOutlined />}>
                                <Link to='/music' >Music</Link>
                            </Menu.Item>
                            <Menu.Item key="7" icon={<SettingOutlined />}>
                                <Link to='/settings' >Settings</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header />
                        <Content className={styles.content}>
                                <Switch>
                                    <Redirect exact from={'/'} to={'/profile'}/>
                                    <Route path='/profile/:userId?'
                                           render={() => <ProfileContainer/>}/>
                                    <Route path='/dialogs'
                                           render={() => {
                                               return <Suspense fallback={<Preloader/>}>
                                                   <DialogsContainer/>
                                               </Suspense>
                                           }
                                           }/>
                                    <Route path='/users'
                                           render={() => <UsersPage/>}/>
                                    <Route path='/generalChatPage'
                                           render={() => {
                                               return <Suspense fallback={<Preloader/>}>
                                                   <GeneralChatPage/>
                                               </Suspense>
                                           }
                                           }/>
                                    <Route path='/news' component={News}/>
                                    <Route path='/music' component={Music}/>
                                    <Route path='/settings' component={Settings}/>
                                    <Route path='/login' component={LoginPage}/>
                                    <Route path='*' render={() => <div>404 Page Not Found</div>}/>
                                </Switch>
                        </Content>
                        <Footer className={styles.footer}>SN ©2021 Created by Nikita Maliarchuk</Footer>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}

let ContainerApp = connect(mapStateToProps, {initializeApp})(App)

let MainApp: React.FC = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <ContainerApp/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default MainApp