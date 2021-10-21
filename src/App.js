import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, HashRouter, Route} from "react-router-dom"
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
import store from "./redux/redux-store"

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()

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
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}


let ContainerApp = connect(mapStateToProps, {initializeApp})(App)

let MainApp = () => {
    return (
        <React.StrictMode>
            <HashRouter>
                <Provider store={store}>
                    <ContainerApp/>
                </Provider>
            </HashRouter>
        </React.StrictMode>
    )
}

export default MainApp