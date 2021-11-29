import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, HashRouter, Redirect, Route, Switch} from "react-router-dom"
import Settings from "./components/Settings/Settings"
import Music from "./components/Music/Music"
import News from "./components/News/News"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login"
import React, {Component, Suspense} from "react"
import {connect, Provider} from "react-redux"
import {initializeApp} from "./redux/app-reducer"
import Preloader from "./components/common/Preloader/Preloader"
import store, {AppStateType} from "./redux/redux-store"

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))

type MapStateTpPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    initializeApp: () => void
}

class App extends Component<MapStateTpPropsType & MapDispatchToPropsType> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Some error occured! (Check console for more details)')
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
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Redirect exact from={'/'} to={'/profile'} />
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
                               render={() => <UsersContainer/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/login' component={Login}/>
                        <Route path='*' render={() => <div>404 Page Not Found</div>}/>
                    </Switch>
                </div>
            </div>
        );
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